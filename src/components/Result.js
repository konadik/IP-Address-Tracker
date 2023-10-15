import {useCallback, useEffect, useState} from "react";

const Result = (props) => {
    const [value, setValue] = useState({});

    const fetchDataToDisplay = useCallback(() => {
        if (props.dataToDispaly) {
            setValue(props.dataToDispaly);
        }
    }, [props.dataToDispaly]);

    useEffect(() => {
        fetchDataToDisplay();
    }, [fetchDataToDisplay])


    return (
        <div className="relative z-10 rounded-xl">
            {   value.location ? ( <div
                className="flex justify-center space-y-6 md:space-y-0 md:flex-row flex-col p-10 md:space-x-16 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl">
                <Cell title="Ip address" text={value.ip} isFirst={true}/>
                {value.location && <Cell  title="Location" text={`${value.location.city}, ${value.location.country}`}/>}
                {value.location && <Cell title="Timezone" text={value.location.timezone}/>}
                <Cell title="ISP" text={value.isp}/>
            </div>):
            <p>
                Waiting for data to fetch....
            </p>}
        </div>
    );

}

const Cell = ({title, text, isFirst}) => {
    return (
            <div
                className={`flex whitespace-nowrap flex-col md:space-y-5 items-center md:items-start  ${isFirst ? '' : 'md:border-l md:border-gray-300 md:px-5 '} `}>
                <h1 className="text-xs text-gray uppercase text-gray-500 font-bold tracking-wider">{title}</h1>
                <p className="text-xl font-bold">{text}</p>
            </div>
    );
};

export default Result;
