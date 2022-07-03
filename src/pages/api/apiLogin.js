import apiConnection from "./apiConnection";


export default {
    async userLogin(email, password) {
        return await apiConnection.post('/login', {"email": email, "password": password})
    }
}