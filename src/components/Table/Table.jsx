import React from 'react'
import "./Table.css"

const Table = () => {

  // <div className="table-wrapper-list-body-feature">
  //           <h4 className="table-wrapper-list-body-feature-item">Cloud Technology</h4>
  //           <h4 className="table-wrapper-list-body-feature-itemb">Simple Interface</h4>
  //           <h4 className="table-wrapper-list-body-feature-item">10-Day Forecast</h4>
  //           <h4 className="table-wrapper-list-body-feature-itemb">Weather Alerts</h4>
  //           <h4 className="table-wrapper-list-body-feature-item">Air Quality Data</h4>
  //           <h4 className="table-wrapper-list-body-feature-itemb">Weather Maps</h4>
  //           <h4 className="table-wrapper-list-body-feature-item">Affordable Price</h4>
  //         </div>
  //         <div className="table-wrapper-list-body-juniper">
  //           <h5 className="table-wrapper-list-body-juniper-item">Cloud technology for reliable forecasts</h5>
  //           <h5 className="table-wrapper-list-body-juniper-item">Simple and intuitive interface</h5>
  //           <h5 className="table-wrapper-list-body-juniper-item">10-day forecast with hourly updates</h5>
  //           <h5 className="table-wrapper-list-body-juniper-item">Severe weather alerts and notifications</h5>
  //           <h5 className="table-wrapper-list-body-juniper-item">Air quality information and maps</h5>
  //           <h5 className="table-wrapper-list-body-juniper-item">Temperature and precipitation maps</h5>
  //           <h5 className="table-wrapper-list-body-juniper-item">Inexpensive and affordable</h5>
  //         </div>
  //         <div className="table-wrapper-list-body-other">
  //           <h5 className="table-wrapper-list-body-other-item">Other apps use outdated data sources</h5>
  //           <h5 className="table-wrapper-list-body-other-item">Other apps have cluttered designs</h5>
  //           <h5 className="table-wrapper-list-body-other-item">Other apps offer 7-day forecast or less</h5>
  //           <h5 className="table-wrapper-list-body-other-item">Other apps do not warn you of hazards</h5>
  //           <h5 className="table-wrapper-list-body-other-item">Other apps do not include air quality data</h5>
  //           <h5 className="table-wrapper-list-body-other-item">Other apps do not show global patterns</h5>
  //           <h5 className="table-wrapper-list-body-other-item">Other apps charge premium prices or fees</h5>
  //         </div>
const data: [
  { feature: " ",
  },
]
  return (
    <div className="table-wrapper">
      <div className="table-wrapper-mountains"></div>
      <div className="table-wrapper-list">
        <div className="table-wrapper-list-head">
          <div className="table-wrapper-list-head-title">JUNIPER</div>
          <div className="table-wrapper-list-head-title">OTHER COMPANY</div>
        </div>
        <div className="table-wrapper-list-body">
          <div className="table-feature">
            <h4 className="table-feature-text"></h4>
          </div>
          <div className="table-juniper">
            <h5 className="table-juniper-text"></h5>
          </div>
          <div className="table-other">
            <h5 className="table-other-"></h5>text
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default Table