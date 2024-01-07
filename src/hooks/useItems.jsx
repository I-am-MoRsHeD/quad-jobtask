import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useItems = () => {
    const { data: items = [], refetch} = useQuery({
        queryKey: ['items'],
        queryFn: async()=>{
            const res = await axios.get('http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10')
            return res.data;
        }
    })
    return [items, refetch];
};

export default useItems;