import React from 'react'
import hotelLogo from '../assets/hotelLogo.jpg' // Importing the hotel logo image from the assets folder
//import background from '../assets/blackBg.jpg' // Importing the background image from the assets folder

const Header = () => {
  return (
    <>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        @keyframes slide {
          from { transform: translateX(100%); }
          to { transform: translateX(-100%); }
        }
        @keyframes shine {
          0% { text-shadow: 0 0 5px #fff; }
          50% { text-shadow: 0 0 20px #fff; }
          100% { text-shadow: 0 0 5px #fff; }
        }
      `}</style>

      <div style={{
        background: '#121212',
        borderBottom: '1px solid #C5A059',
        height: '120px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '20px',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <span style={{ position: 'absolute',
           top: '0', left: '15%', 
           fontSize: '28px', 
           animation: 'slide 6s linear infinite' }}>
          🍽️
        </span>
        <span style={{ position: 'absolute',
           bottom: '10px',
            left: '28%', 
           fontSize: '28px', 
           animation: 'float 4s ease-in-out infinite' }}>
          ☕︎
        </span>
        <span style={{ position: 'absolute',
           top: '15px', 
           right: '45%', 
           fontSize: '28px', 
           animation: 'float 5s ease-in-out infinite' }}>
          ♨
        </span>
        <span style={{ position: 'absolute',
           bottom: '12px', 
           right: '20%',
            fontSize: '28px',
             animation: 'float 3.5s ease-in-out infinite' }}>
          𖠚
        </span>
        <span style={{ position: 'absolute',
           top: '15px', 
           right: '5%',
            fontSize: '28px', 
            animation: 'float 3.5s ease-in-out infinite' }}>
          𖡡
        </span>

        <img src={hotelLogo} alt="logo" style={{ width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover' }} />
        <marquee>
          <h1 style={{ color: '#E6CA65', fontFamily: 'Tangerine cursive', fontSize: '4rem', animation: 'shine 1.5s ease-in-out infinite' }}>
            WELCOME TO OUR RESTAURANT
          </h1>
        </marquee>
      </div>
    </>
  )
}

export default Header