import useCrypter from "@/Hooks/useCrypter";
import {useRoute, useRouter} from "vue-router";
const crypter = useCrypter();
const useHashRoute = () => {
    const router = useRouter()
    const route = useRoute();
    const set = (params) => {
        const encrypted = crypter.encrypt(JSON.stringify(params));
        router.replace({
            name: route.name,
            params: route.params,
            query: {
                state: encrypted
            }
        })
    }
    const get = () => {
        const decrypted = crypter.decrypt(route.query.state);
        return JSON.parse(decrypted);
    }
    return {get, set};
}
export default useHashRoute;