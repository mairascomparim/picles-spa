import { GetPetRequest, GetPetsResponse } from '../../Interfaces/pet'
import httpClient from '../api/httpClient'

export async function getPets(params?: GetPetRequest): Promise<GetPetsResponse>{
    console.log(params)
    try{
        const response = await httpClient.get('/pet', { params})

        return response.data
    }catch(error){
        console.log('Erro ao buscar Pets', error)
        throw error
    }
}