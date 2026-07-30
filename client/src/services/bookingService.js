import api from "./api";


export const createBooking = async(data)=>{

    const response = await api.post(
        "/api/bookings",
        data
    );

    return response.data;

};



export const getBookings = async()=>{

    const response = await api.get(
        "/api/bookings"
    );

    return response.data;

};



export const updateBooking = async(id,data)=>{

    const response = await api.put(
        `/api/bookings/${id}`,
        data
    );

    return response.data;

};



export const deleteBooking = async(id)=>{

    const response = await api.delete(
        `/api/bookings/${id}`
    );

    return response.data;

};