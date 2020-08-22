import React, { useContext } from "react"
import styled from "styled-components"
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion"

import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

import { Map, Marker, Popup, TileLayer, ZoomControl } from "react-leaflet"

import "leaflet/dist/leaflet.css"
import "leaflet/dist/leaflet-src.js"
import "leaflet-providers/leaflet-providers.js"
import L from "leaflet"




const MapContainer = ({ props, className, children }) => {
  const themeContext = useContext(ThemeManagerContext)

  const position = [54.37518, 9.31952]

const myIcon = L.icon({
  iconUrl: require("../svg/mapMarker.svg"),
  iconSize: [55, 55],
  iconAnchor: [32, 64],
  popupAnchor: [0, -60],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
})

  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        <Map style={{"height": "100%", "width": "100%"}}center={position} zoom={12} zoomControl={false}>
          <TileLayer
            url={
              themeContext.isDark
                ? "https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}"
                : "https://{s}.tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token={accessToken}"
            }
            attribution='<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            minZoom="0"
            maxZoom="22"
            subdomains="abcd"
            accessToken={process.env.GATSBY_LEAFLET_API}
          />
          <Marker icon={myIcon} position={position}>
            <Popup>
              <h3>Hof Appelbü</h3>
              <p>24861 Bergenhusen, Schleswig Holstein</p>
              <a href="https://goo.gl/maps/dScYJjtu87cBHCGq6" target="_blank">
                Anfahrt
              </a>
            </Popup>
            <ZoomControl position="bottomleft" />
          </Marker>
        </Map>
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}

export default MapContainer
