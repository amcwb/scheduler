import React from "react";
import "./Schedule.scss";
import { useStickyState } from "./stickyState";
import Moment from "react-moment";

interface ScheduleData {
    id: string,
    title: string,
    description: string,
    date: Date
}

export default function Schedule(props: ScheduleData) {
    let [value, setValue] = useStickyState<ScheduleData>(props, props.id);
    return (
        <div className="Schedule">
            <div className="MainBar">
                <div className="Title">
                    {value.title}
                </div>
                <div className="Countdown">
                    <Moment date={value.date} fromNow></Moment>
                </div>
            </div>
        </div>
    );
}