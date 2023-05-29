import React, { useState } from "react";
import { createCalendar } from "./api/createCalendar.js";
import { useUserMiddleware } from "../../router/useUserMiddleware";

const CreateCalendar = () => {
    // useUserMiddleware();
    const [calendar, setCalendar] = useState({
        type: "",
        time_zone: ""
    })
    const handleChange = (e) => {
        setCalendar(prev => ({...prev, [e.target.name]:e.target.value}))
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        const response = await createCalendar(calendar)
        console.log(response)
    }
    return (
        <div className="container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Create calendar</h2>
                <div className="form-group">
                    <label className="form-label" htmlFor="type">Type</label>
                    <input className="form-input" type="text" id="type" name="type"
                           onChange={handleChange} required/>
                </div>
                <div className="select-wrapper">
                    <select className="select" onChange={handleChange} name='time_zone'>
                        <option value="" disabled selected>Select timezone:</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        {/* <option value="GMT-9">GMT-9</option> */}
                        {/* <option value="GMT-8">GMT-8</option> */}
                        {/* <option value="GMT-7">GMT-7</option> */}
                        {/* <option value="GMT-6">GMT-6</option> */}
                        {/* <option value="GMT-5">GMT-5</option> */}
                        {/* <option value="GMT-4">GMT-4</option> */}
                        {/* <option value="GMT-3">GMT-3</option> */}
                        {/* <option value="GMT-2">GMT-2</option> */}
                        {/* <option value="GMT-1">GMT-1</option> */}
                        {/* <option value="GMT 0">GMT 0</option> */}
                        {/* <option value="GMT 1">GMT 1</option> */}
                        {/* <option value="GMT 2">GMT 2</option> */}
                        {/* <option value="GMT 3">GMT 3</option> */}
                        {/* <option value="GMT 4">GMT 4</option> */}
                        {/* <option value="GMT 5">GMT 5</option> */}
                        {/* <option value="GMT 6">GMT 6</option> */}
                        {/* <option value="GMT 7">GMT 7</option> */}
                        {/* <option value="GMT 8">GMT 8</option> */}
                        {/* <option value="GMT 9">GMT 9</option> */}
                        {/* <option value="GMT 10">GMT 10</option> */}
                        {/* <option value="GMT 11">GMT 11</option> */}
                        {/* <option value="GMT 12">GMT 12</option> */}
                        {/* <option value="GMT 13">GMT 13</option> */}
                        {/* <option value="GMT 14">GMT 14</option> */}
                    </select>
                </div>

                <button className="form-submit" type="submit">OK</button>
                <button className="form-cancel" type="button">Cancel</button>
            </form>
        </div>
    );
};

export default CreateCalendar;
