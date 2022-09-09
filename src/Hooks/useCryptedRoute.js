import useCrypter from "@/Hooks/useCrypter";
import {onMounted, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";

const crypter = useCrypter();
const useCryptedRoute = (key = "state") => {
    const router = useRouter()
    const route = useRoute();
    const state = ref({});

    const setRoute = async (params) => {
        const encrypted = crypter.encrypt(JSON.stringify(params));
        await router.push({
            name: route.name,
            params: route.params,
            query: {
                key: encrypted
            }
        })
    }
    const getRoute = async () => {
        if (!route.query.state) return {};
        const decrypted = crypter.decrypt(route.query[key]);
        return JSON.parse(decrypted);
    }

    watch(() => route.query, () => {
        state.value = getRoute();
    });

    onMounted(() => {
        state.value = getRoute();
    });

    return {setRoute, getRoute, state, route, router};
}
export default useCryptedRoute;