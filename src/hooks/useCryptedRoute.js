import {onMounted, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useCrypter} from "short-crypter/src/hooks/index.js";

const {encrypt, decrypt} = useCrypter();
const useCryptedRoute = (key = "state") => {
    const router = useRouter()
    const route = useRoute();
    const state = ref({});

    const setRouteData = async (params) => {
        const encrypted = encrypt(JSON.stringify(params));
        await router.push({
            name: route.name,
            params: route.params,
            query: {
                [key]: encrypted
            }
        })
    }
    const getRouteData = () => {
        if (!route.query[key]) return {};
        const decrypted = decrypt(route.query[key]);
        return JSON.parse(decrypted);
    }

    watch(() => route?.query, () => {
        state.value = getRouteData();
    });

    onMounted(() => {
        state.value = getRouteData();
    });

    return {setRouteData, getRouteData, state, route, router};
}
export default useCryptedRoute;