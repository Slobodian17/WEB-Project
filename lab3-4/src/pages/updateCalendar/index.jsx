import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getCalendarById } from "./api/getCalendarById.js";
import { updateCalendar } from "./api/updateCalendar.js";
import { useAdminMiddleware } from "../../router/useAdminMiddleware.js";

const UpdateCalendar = () => {
    // useAdminMiddleware();
    const {id} = useParams()
    const [calendar, setCalendar] = useState({
        type: "",
        description: "",
        time_zone: ""
    })
    const handleChange = (e) => {
        setCalendar(prev => ({...prev, [e.target.name]:e.target.value}))
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        const response = await updateCalendar(calendar, id)
        console.log(response)
    }
    useEffect(() => {
        getCalendarById(id).then(calendar => {

            setCalendar(prev => ({
                ...prev,
                type: calendar.type,
                description: calendar.description,
                time_zone: calendar.time_zone,
            }))
        })
    }, [])
    console.log(calendar)
    return (
        <div className="container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Update calendar</h2>
                <div className="form-group">
                    <label className="form-label" htmlFor="type">Type</label>
                    <input className="form-input" type="text" id="type" name="type"
                           onChange={handleChange} value={calendar.type}  required/>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="description">Description</label>
                    <textarea className="form-textarea"  id="description" name="description"
                              onChange={handleChange} value={calendar.description??''} required/>
                </div>
                <div className="select-wrapper">
                    <label className="form-label" htmlFor="select">Select timezone</label>
                    <select className="select" onChange={handleChange} name='time_zone'
                            value={calendar.time_zone}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        {/* <option value="option1">GMT-9</option> */}
                        {/* <option value="option1">GMT-8</option> */}
                        {/* <option value="option1">GMT-7</option> */}
                        {/* <option value="option1">GMT-6</option> */}
                        {/* <option value="option1">GMT-5</option> */}
                        {/* <option value="option1">GMT-4</option> */}
                        {/* <option value="option1">GMT-3</option> */}
                        {/* <option value="option1">GMT-2</option> */}
                        {/* <option value="option1">GMT-1</option> */}
                        {/* <option value="option1">GMT 0</option> */}
                        {/* <option value="option1">GMT 1</option> */}
                        {/* <option value="option1">GMT 2</option> */}
                        {/* <option value="option1">GMT 3</option> */}
                        {/* <option value="option1">GMT 4</option> */}
                        {/* <option value="option1">GMT 5</option> */}
                        {/* <option value="option1">GMT 6</option> */}
                        {/* <option value="option1">GMT 7</option> */}
                        {/* <option value="option1">GMT 8</option> */}
                        {/* <option value="option1">GMT 9</option> */}
                        {/* <option value="option1">GMT 10</option> */}
                        {/* <option value="option1">GMT 11</option> */}
                        {/* <option value="option1">GMT 12</option> */}
                        {/* <option value="option1">GMT 13</option> */}
                        {/* <option value="option1">GMT 14</option> */}
                    </select>
                </div>

                <button className="form-submit" type="submit">OK</button>
                <button className="form-cancel" type="button">Cancel</button>
            </form>
        </div>
    );
};

export default UpdateCalendar;
