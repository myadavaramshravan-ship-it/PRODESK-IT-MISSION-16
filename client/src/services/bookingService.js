import axios from "axios";
const API = "http://localhost:5000/api/bookings";
export const createBooking = async(data)=>{
    const token = localStorage.getItem("token");
    const response = await axios.post(
        API,
        data,
        {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }
    );
    return response.data;
};

export const getBookings = async()=>{
    const token = localStorage.getItem("token");
    const response = await axios.get(
        API,
        {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }
    );
    return response.data;
};

export const updateBooking = async(id,data)=>{
    const token = localStorage.getItem("token");
    const response = await axios.put(
        `${API}/${id}`,
        data,
        {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }

    );
    return response.data;
};

export const deleteBooking = async(id)=>{
    const token = localStorage.getItem("token");
    const response = await axios.delete(
        `${API}/${id}`,
        {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }
    );
    return response.data;

};