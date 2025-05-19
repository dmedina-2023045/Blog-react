import axios from "axios";

const apiClient=axios.create(
    {
        baseURL:'http://localhost:2636/',
        timeout:3000
    }
)
export const getPostsRequest=async()=>{
    try{
        return await apiClient.get('post/getPublication')
    }catch(e){
        return{
            error:true,
            e
        }
    }
}
export const addCommentRequest=async(id,data)=>{
    try{
        return await apiClient.post(`comment/addComment/${id}`,data)
    }catch(e){
        return {
            error:true,
            e
        }
    }
}