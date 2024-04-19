import { GetPetRequest, GetPetsResponse } from "../Interfaces/pet";

interface IUsePetList {
    dat?: GetPetsResponse,
    isLoading: boolean
}

export function usePetList(params: GetPetRequest): IUsePetList{
    const { data , isLoading } = useQuery({
        queryKey: ['get-pets', params],
        queryFn: () => getPets(params),
    })

    return {data, isLoading} 
}