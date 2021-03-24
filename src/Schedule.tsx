import React from "react";
import "./Schedule.css";
import { useStickyState } from "./stickyState";

interface ScheduleData {
    id: string,
    title: string,
    description: string,
    date: Date
}

export default function Schedule(props: ScheduleData) {
    let [value, setValue] = useStickyState<ScheduleData>(props, props.id);
    return (
        <div className="schedule">
            {value.title} at {new Date(value.date).toLocaleString()}
        </div>
    );
}