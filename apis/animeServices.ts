import httpApi from "./httpApi";
interface ResponseObject {
    data?: any, success: Boolean
}
const getAnimes = async () => {
    try {
        const response: ResponseObject = await httpApi.get("/anime");
        return { data: response.data, success: true };
    } catch (err) {
        console.log("error", err);
        return { success: false };
    }
}

export { getAnimes }