import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';
import Map from './Map';
import GoogleMap from '../components/GoogleMap';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Admin = () => {
  const { currentColor, currentMode } = useStateContext();
  const agencies = [
    {
      id: 1,
      name: 'Fire Department of Mumbai',
      type: 'Fire',
      latitude: 19.075983,
      longitude: 72.877655,
    },
    {
      id: 2,
      name: 'Police Department of Delhi',
      type: 'Police',
      latitude: 28.6139,
      longitude: 77.2295,
    },
    {
      id: 3,
      name: 'Red Cross Society of Bangalore',
      type: 'Medical',
      latitude: 12.9716,
      longitude: 77.5946,
    },
    // Add more agency objects here...
  ];
  

  return (
    <div className="mt-24">
      <div className='m-5'>
        {/* <Map />  */}
        <GoogleMap agencies={agencies} />
      </div>
    </div>
  );
};

export default Admin;
