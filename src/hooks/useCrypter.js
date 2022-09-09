import {zlibSync, unzlibSync, strToU8, strFromU8} from 'fflate'

const useCrypter = () => {
    const encrypt = (text) => {
        const buffer = strToU8(text)
        const zipped = zlibSync(buffer, {level: 9})
        const binary = strFromU8(zipped, true)
        return btoa(binary)
    }
    const decrypt = (text) => {
        const binary = atob(text)
        if (binary.startsWith('\x78\xDA')) {
            const buffer = strToU8(binary, true)
            const unzipped = unzlibSync(buffer)
            return strFromU8(unzipped)
        }
        return binary;
    }
    return {encrypt, decrypt};
}
export default useCrypter;