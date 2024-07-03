import React from 'react';
import './App.css';
import './index.css'

import Navbar from './components/Navbar'

// images
import menu_background from "./assets/images/menu_background.jpeg"
import one from "./assets/images/one.png"
import two from "./assets/images/two.png"
import three from "./assets/images/three.png"
import four from "./assets/images/four.png"
import five from "./assets/images/five.png"

const settings = [
  { label: 'REGION', value: 'EUROPE - DE' },
  { label: 'PUNKBUSTER', value: 'ON' },
  { label: 'FAIRFIGHT', value: 'ON' },
  { label: 'PASSWORD', value: 'OFF' },
  { label: 'PRESET', value: 'NORMAL' },
];
const advanced = [
  { label: 'MINIMAP', value: 'ON' },
  { label: 'ONLY SQUAD LEADER SPAWN', value: 'OFF' },
  { label: 'VEHICLES', value: 'ON' },
  { label: 'TEAM BALANCE', value: 'ON' },
  { label: 'MINIMAP SPOTTING', value: 'ON' },
  { label: 'HUD', value: 'ON' },
  { label: '3P VEHICLE CAM', value: 'ON' },
  { label: 'REGENERATIVE HEALTH', value: 'ON' },
  { label: 'KILL CAM', value: 'ON' },
  { label: 'FRIENDLY FIRE', value: 'OFF' },
  { label: '3D SPOTTING', value: 'ON' },
  { label: 'ENEMY NAME TAGS', value: 'ON' },
];
const rules = [
  { label: 'TICKETS', value: '400' },
  { label: 'VEHICLE SPAWN DELAY', value: '25' },
  { label: 'BULLET DAMAGE', value: '100' },
  { label: 'KICK AFTER TEAM KILLS', value: '5' },
  { label: 'PLAYER HEALTH', value: '100' },
  { label: 'PLAYER RESPAWN TIME', value: '100' },
  { label: 'KICK AFTER IDLE', value: '300' },
  { label: 'BAN AFTER KICKS', value: '3' },
];

const maps = [
  { name: 'CONQUEST LARGE DAWNBREAKER', image: one },
  { name: 'CONQUEST LARGE PROPAGANDA', image: two },
  { name: 'CONQUEST LARGE OPERATION LOCKER', image: three },
  { name: 'CONQUEST LARGE LANCANG DAM', image: four },
  { name: 'CONQUEST LARGE SIEGE OF SHANGHAI', image: five },
  { name: 'CONQUEST LARGE SIEGE OF SHANGHAI', image: five },
  { name: 'CONQUEST LARGE DAWNBREAKER', image: one },
  { name: 'CONQUEST LARGE PROPAGANDA', image: two },
  { name: 'CONQUEST LARGE OPERATION LOCKER', image: three },
  { name: 'CONQUEST LARGE LANCANG DAM', image: four },
  { name: 'CONQUEST LARGE SIEGE OF SHANGHAI', image: five },
  { name: 'CONQUEST LARGE SIEGE OF SHANGHAI', image: five },
  { name: 'CONQUEST LARGE DAWNBREAKER', image: one },
  { name: 'CONQUEST LARGE PROPAGANDA', image: two },
  { name: 'CONQUEST LARGE OPERATION LOCKER', image: three },
  { name: 'CONQUEST LARGE LANCANG DAM', image: four },
];

function App() {
  return (
    <div className="body rajdhani-regular-heading map-container">
      <div className="bgImageBox">
        <img
          alt="Authorization Background"
          src={menu_background}
          className="bgImage "
        />
      </div>
      <main className="mainScreen">

        {/* left div */}
        <div className="leftScreen">
          left nav
        </div>

        <div className="centerScreen custom-cursor">

          <div className="topScreen">
            <Navbar />
          </div>

          {/* main code here */}
          <h1 className='rajdhani-heading'>SERVER INFO</h1>

          <br />
          <br />

          <h2 className='rajdhani-sub-heading'>! RC3-BASEMAPS</h2 >

          <p className='rajdhani-text pb-5'>
            CONQUEST LARGE
            -
            LANCANG DAM
            -
            CUSTOM
            -
            60
            HZ <br />
            Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epg.gg | Discord https://discord.gg/3r5NK4d</p>

          <div className='flex flex-row'>
            <button class="custom-button">JOIN</button>
            <button class="custom-button">SPECTATE</button>
            <button class="custom-button">JOIN AS COMMANDER</button>
            <button class="custom-button">13672</button>
          </div>

          <div className=" flex ">
            <div className="flex justify-center space-x-8 text-white mr-5 my-5">
              <div className="text-center">
                <div className="text-xs">PLAYERS</div>
                <div className="text-base ">60/64</div>
              </div>
              <div className="text-center">
                <div className="text-xs">PING</div>
                <div className="text-base">104ms</div>
              </div>
              <div className="text-center">
                <div className="text-xs">TICKRATE</div>
                <div className="text-base">60 Hz</div>
              </div>
            </div>
          </div>


          {/* table kaa code */}
          <div className=" text-white flex ">
            <div className="flex space-x-16">
              <div>
                <h2 className="text-xs mb-4">SETTINGS</h2>
                <ul>
                  {settings.map((item, index) => (
                    <li key={index} className="mb-2 ele">
                      <span className="text-sm child">{item.label}</span>: <span className="table-text child">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xs mb-4">ADVANCED</h2>
                <ul>
                  {advanced.map((item, index) => (
                    <li key={index} className="mb-2 ele">
                      <span className="text-sm child">{item.label}</span>: <span className="table-text child">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xs  mb-4">RULES</h2>
                <ul>
                  {rules.map((item, index) => (
                    <li key={index} className="mb-2 ele">
                      <span className="text-sm child">{item.label}</span>: <span className="table-text child">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* map cards */}
          <div className=" text-white p-8 w-3/5">
            <h2 className="text-2xl font-bold mb-4">MAP ROTATION</h2>

            <div className="grid grid-cols-4 gap-4">
              {maps.map((map, index) => (
                <div key={index} className="relative">
                  <img
                    src={map.image}
                    alt={map.name}
                    className="w-full h-40 object-cover"
                  />

                  <div className="card">
                    <span className="card-text">{map.name}</span>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Till Here */}
        </div>

        {/* right div */}
        <div className="rightScreen">
          right nav
        </div>

      </main >
    </div >
  );
}

export default App;
