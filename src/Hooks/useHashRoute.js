import useCrypter from "@/Hooks/useCrypter";
import { onMounted, ref, watch } from "vue";
import {useRoute, useRouter} from "vue-router";
const crypter = useCrypter();
const useHashRoute = () => {
    const router = useRouter()
    const route = useRoute();
    const state = ref({});
    const set = (params) => {
        const encrypted = crypter.encrypt(JSON.stringify(params));
        router.push({
            name: route.name,
            params: route.params,
            query: {
                state: encrypted
            }
        })
    }
    const get = () => {
        if(!route.query.state) return {};
        const decrypted = crypter.decrypt(route.query.state);
        return JSON.parse(decrypted);
    }

    watch(() => route.query, () => {
        state.value = get();
    });

    onMounted(() => {
        state.value = get();
    });

    return {get, set, state};
}
export default useHashRoute;