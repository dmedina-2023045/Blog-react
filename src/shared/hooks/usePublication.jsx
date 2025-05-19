import { useState } from "react"
import { getPostsRequest } from "../../services/API"
import toast from "react-hot-toast"

export const usePublication=()=>{
    const [publications,setPublications]=useState(null)

    const getPublications=async()=>{
        const publicationData=await getPostsRequest()
         console.log("Respuesta:", publicationData)

        if(publicationData.error){
            console.log("Error:", publicationData.e)
            return toast.error(
                publicationData?.e?.response?.data||
                'Error al listar las publicaciones'
            )
        }
        setPublications({
  publications: publicationData.data.post
})

    }
    return{
        getPublications,
        isFetching:!publications,
        allPublications:publications?.publications,
    }
}