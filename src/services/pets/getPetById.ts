import httpClient from "../api/httpClient"

export async function getPetById(id: string){
    try{
        const response = await httpClient.get(`/pet/${id}`)
        return response.data
    }catch(error){
        console.error('Erro ao buscar por Id')
        throw error
    }   
}