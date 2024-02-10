import axios from 'axios';

export const getAllCars=()=>async dispatch=>{
    dispatch({type:'LOADING',payload:true})
    try{
        const response=await axios.get('/api/cars/getallcars')
        dispatch({tye:'GET_ALL_CARS',payload:response.daat})
        dispatch({type:'LOADING',payload:false})
    }catch(error)
    {
        console.log(error)
        dispatch({type:'LOADING',payload:false})
    }
}
//00:48:00