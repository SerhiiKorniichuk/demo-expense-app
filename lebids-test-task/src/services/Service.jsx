import useHttp from "../hooks/http.hook";

const useService = () => {
   const {loading, request, badResponse, successResponse, clearError, globalError} = useHttp();

   const __apibase = "https://incode-backend-dev.herokuapp.com/";

   const auth = async (body) => {
      const res = await request(`${__apibase}auth/login`, "POST", body);
      return res;
   }

   const reg = async (body) => {
      const res = await request(`${__apibase}auth/register`, "POST", body);
      return res;
   }

   const logout = async () => {
      console.log("!!!")
      const res = await request(`${__apibase}auth/logout`, "GET");
      return res;
   }

   return {reg, auth, logout, loading, badResponse, successResponse, clearError, globalError};
}

export default useService;