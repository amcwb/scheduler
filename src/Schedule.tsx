import React, { useState } from "react";
import "./Generic.scss";
import { useStickyState } from "./stickyState";
import Moment from "react-moment";
import moment from "moment";

export interface ScheduleData {
    id: string,
    title: string,
    description: string,
    date: string,
    hue: number
}

export interface ScheduleProps extends ScheduleData {
    onDelete?: (id: string) => void
}

export default function Schedule(props: ScheduleProps) {
    let [value, setValue] = useStickyState<ScheduleData>(props, props.id);
    let [showPopup, setShowPopup] = useState(false);

    let onTitleChange = (event: any) => {
        setValue({
            ...value,
            title: event.target.value
        })
    }

    let onDescriptionChange = (event: any) => {
        setValue({
            ...value,
            description: event.target.value,
        })
    }

    let onDateChange = (event: any) => {
        console.log(value.date, event.target.value);
        if (!event.target.value) return;
        setValue({
            ...value,
            date: moment(event.target.value + " " + moment(value.date).format("HH:MM:SS")).toISOString()
        })
    }

    let onTimeChange = (event: any) => {
        console.log(value.date, event.target.value);
        if (!event.target.value) return;
        setValue({
            ...value,
            date: moment(moment(value.date).format("YYYY/MM/DD") + " " + event.target.value).toISOString()
        })
    }
    return (
        <div className="Schedule" style={{backgroundColor: "hsl(" + value.hue + ", 75%, 90%)"}}>
            <div className="Info" onClick={() => {setShowPopup(!showPopup)}}>
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
                    <div className="Field">
                        <label className="FieldTitle">Danger zone</label>
                        <button className="FieldInput FieldInput--red" onClick={() => {if (props.onDelete) props.onDelete(value.id)}}>Delete</button>
                    </div>
                </div>
            : null}
        </div>
    );
}