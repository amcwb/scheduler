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
                aaa
            </div>
        </div>
    );
}