const useCrypter = () => {
    const encrypt = (text) => btoa(text);
    const decrypt = (text) => atob(text);
    return {encrypt, decrypt};
}
export default useCrypter;