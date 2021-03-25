import React, { useEffect, useState } from "react";
import "./Generic.scss";
import { useStickyState } from "./stickyState";
import Moment from "react-moment";
import moment from "moment";

export interface ScheduleData {
    id: string,
    title: string,
    description: string,
    date: string
}

export default function Schedule(props: ScheduleData) {
    let [value, setValue] = useStickyState<ScheduleData>(props, props.id);
    let [showPopup, setShowPopup] = useState(false);

    let onTitleChange = (event: any) => {
        setValue({
            id: value.id,
            title: event.target.value,
            description: value.description,
            date: value.date
        })
    }

    let onDescriptionChange = (event: any) => {
        setValue({
            id: value.id,
            title: value.title,
            description: event.target.value,
            date: value.date
        })
    }

    let onDateChange = (event: any) => {
        setValue({
            id: value.id,
            title: value.title,
            description: value.description,
            date: moment(event.target.value + " " + moment(value.date).format("HH:MM:SS")).toISOString()
        })
    }

    let onTimeChange = (event: any) => {
        setValue({
            id: value.id,
            title: value.title,
            description: value.description,
            date: moment(moment(value.date).format("YYYY/MM/DD") + " " + event.target.value).toISOString()
        })
    }

    return (
        <div className="Schedule">
            <div className="Info">
                <div className="MainBar">
                    <div className="Title">
                        {value.title}
                    </div>
                    <div className="Countdown">
                        <Moment date={value.date} fromNow withTitle></Moment>
                    </div>
                </div>
                <div className="InfoBar">
                    <div className="Date">
                        <Moment date={value.date} local></Moment>
                    </div>

                    <div className="Description">
                        {value.description}
                    </div>
                </div>
            </div>
            <div className="Actions">
                <button onClick={() => setShowPopup(true)}>Edit</button>
                <button>Delete</button>
            </div>

            {showPopup ?
                <div className="EditSection">
                    <div className="Field">
                        <label htmlFor="title" className="FieldTitle">Title</label>
                        <input type="text" className="FieldInput" defaultValue={value.title} onChange={onTitleChange}/>
                    </div>
                    <div className="Field">
                        <label htmlFor="description" className="FieldTitle">Description</label>
                        <textarea rows={10} className="FieldInput" defaultValue={value.description} onChange={onDescriptionChange}/>
                    </div>
                    <div className="Field">
                        <label htmlFor="date" className="FieldTitle">Date and time</label>
                        <input type="date" className="FieldInput" defaultValue={moment(value.date).format("YYYY-MM-DD")} onChange={onDateChange}/>
                        <input type="time" className="FieldInput" defaultValue={moment(value.date).format("HH:MM:SS")} onChange={onTimeChange}/>
                    </div>
                </div>
            : null}
        </div>
    );
}