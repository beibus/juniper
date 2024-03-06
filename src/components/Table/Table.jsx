import React from 'react'
import "./Table.css"

const Table = () => {

  const data = [
    {
      feature: "Cloud Technology",
      juniper: "Cloud technology for reliable forecasts",
      other: "Other apps use outdated data sources",
      style: "table-wrapper-list-body color"
    },
    {
      feature: "Simple Interface",
      juniper: "Temperature and precipitation maps",
      other: "Other apps have cluttered designs",
      style: "table-wrapper-list-body"
    },
    {
      feature: "10-Day Forecast",
      juniper: "Simple and intuitive interface",
      other: "Other apps offer 7-day forecast or less",
      style: "table-wrapper-list-body color"
    },
    {
      feature: "Weather Alerts",
      juniper: "10-day forecast with hourly updates",
      other: "Other apps do not warn you of hazards",
      style: "table-wrapper-list-body"
    },
    {
      feature: "Weather Maps",
      juniper: "Severe weather alerts and notifications",
      other: "Other apps do not include air quality data",
      style: "table-wrapper-list-body color"
    },
    {
      feature: "Air Quality Data",
      juniper: "Air quality information and maps",
      other: "Other apps charge premium prices or fees",
      style: "table-wrapper-list-body"
    },
    {
      feature: "Affordable Price",
      juniper: "Inexpensive and affordable",
      other: "Other apps do not show global patterns",
      style: "table-wrapper-list-body color"
    }
  ]

  return (
    <div className="table-wrapper">
      <div className="table-wrapper-mountains"></div>
      <div className="table-wrapper-list">
        <div className="table-wrapper-list-head">
          <div className="table-wrapper-list-head-title-jun">JUNIPER</div>
          <div className="table-wrapper-list-head-title">OTHER COMPANY</div>
        </div>
        <div className="table-section">
          {data.map(function (data) {
            return (
              <div className={data.style}>
                <div className="table-feature">
                  <h4 className="table-feature-text">{data.feature}</h4>
                </div>
                <div className="table-juniper">
                  <h5 className="table-juniper-text">{data.juniper}</h5>
                </div>
                <div className="table-other">
                  <h5 className="table-other-">{data.other}</h5>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <button className="table-download">DOWNLOAD NOW</button>
    </div>
  )
}

export default Table