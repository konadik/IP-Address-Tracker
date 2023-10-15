import React, {Component, useCallback, useEffect, useState} from 'react';
import {MapContainer, Marker} from 'react-leaflet';
import { TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import './style.css'
import {Icon} from "leaflet";


const Map =(props)=> {
    const [coordinates, setCoordinates] = useState({});

    const customIcon = new Icon({
        iconUrl: require("./assets/marker-icon.png"),
        iconSize: [60, 60]
    })

    useEffect(() => {
            setCoordinates({ lat: props.mapCoordinates.lat, lng: props.mapCoordinates.lng})

    }, [props.mapCoordinates]);


    return (
        <div className="z-1">
            {coordinates.lat && coordinates.lng ? ( <MapContainer key={`${coordinates.lat}-${coordinates.lng}`} center={[coordinates.lat -0.02, coordinates.lng]} zoom={13}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[coordinates.lat, coordinates.lng]} icon={customIcon}/>
                </MapContainer>
            ) : (
                <p>Waiting for the data to fetch...</p>
            )}
        </div>
    );

}

export default Map;
