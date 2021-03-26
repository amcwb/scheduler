import React from "react";
import Schedule from "./Schedule";
import { useStickyState } from "./stickyState";
import { v4 as uuidv4 } from 'uuid';
import "./Generic.scss";
import moment from "moment";

interface IndexData {
    orderBy: "endDate" | "id" | "title",
    ids: string[]
}

export default function Schedules() {
    let [value, setValue] = useStickyState<IndexData>({ orderBy: "endDate", ids: [] }, "index");

    // Check valid IDs
    // setValue({
    //     orderBy: value.orderBy,
    //     ids: value.ids.filter(i => localStorage.getItem(i) !== null)
    // });

    let onDelete = (id: string) => {
        setValue({
            orderBy: value.orderBy,
            ids: value.ids.filter(i => i !== id)
        });

        localStorage.removeItem(id);
    };

    let handleClick = () => {
        let newID = uuidv4();
        localStorage.setItem(newID, JSON.stringify({
            id: newID,
            title: "My new event",
            description: "Put something here, or keep it empty",
            date: moment(Date.now()).toISOString(),
            hue: 360 * Math.random()
        }))
        
        setValue({
            orderBy: value.orderBy,
            ids: value.ids.concat([newID])
        });
    }

    const items = value.ids.map((item) => {
        const data = JSON.parse(localStorage.getItem(item)!);
        return <Schedule {...data} onDelete={onDelete} key={data.id}/>
    });

    console.log(items);

    return (
        <div>
            <div>{items}</div>
            <div className="AddButton" onClick={handleClick}>+</div>
        </div>
    );
}