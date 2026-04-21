import API from "../../../api/axios";

export const loginUser = (data: any) => {
    return API.post("/auth/login", data);
};

export const signupUser = (data: any) => {
    return API.post("https://fakestoreapi.com/users", data);
};