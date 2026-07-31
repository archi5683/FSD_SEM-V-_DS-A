import React from 'react'

import pizza from '../assets/pizza.jpg';
import burger from '../assets/burger.jpg';
import coke from '../assets/coke.jpg';

const MainContent = () => {
  // const menuItems = [
  //   { title: 'Classic Breakfast', desc: 'Soft pancakes, butter, maple syrup, and fresh fruit.', price: '$12' },
  //   { title: 'Garden Pasta', desc: 'Creamy tomato sauce with herbs, roasted vegetables, and parmesan.', price: '$14' },
  //   { title: 'House Special', desc: 'Grilled chicken, warm rice, and a rich garlic sauce.', price: '$16' },
  // ]

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
      <div
    
      style={{
        backgroundColor: '#141414',
        padding: '40px 20px',
        minHeight: '500px',
        display: 'flex',
        //justifyContent: 'center',
        //alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          backgroundColor: '#1E1E1E',
          padding: '35px',
          borderRadius: '18px',
          color: '#F5F0EB',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.25)',
        }}
      >
        <h2
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: '36px',
            color: '#D4AF37',
            textAlign: 'center',
            letterSpacing: '2px',
            marginBottom: '8px',
          }}
        >
          OUR MENU
        </h2>

        <div style={{ 
          display: 'flex',
           justifyContent: 'center',
            gap: '30px' ,
            flexWrap: 'wrap',
            marginTop: '20px',
            }}>
              <div style={{ 
                width: '250px',
                backgroundColor: '#1e1e1e',
                borderRadius: '15px',
                border: "1px solid #2A2A2A",
                overflow: 'hidden',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              }}  >
                <img src={pizza} alt="Pizza" style={{ width: '100%',
                   height: '150px', 
                   objectFit: 'cover' }} />
                <div style={{ padding: '15px' }}>
                  <h3 style={{
                    color: '#D4AF37',
                    margin: '0'
                  }}> Pizza
                  </h3>
                  <h4 style={{
                    color: '#C9BFB3',
                    margin: '0'
                  }}>
                    $12
                  </h4>
                </div>
              </div>
          <div style={{ 
                width: '250px',
                backgroundColor: '#1e1e1e',
                borderRadius: '15px',
                border: "1px solid #2A2A2A",
                overflow: 'hidden',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              }}  >
                <img src={burger} alt="Burger" style={{ width: '100%',
                   height: '150px', 
                   objectFit: 'cover' }} />
                <div style={{ padding: '15px' }}>
                  <h3 style={{
                    color: '#D4AF37',
                    margin: '0'
                  }}> Burger
                  </h3>
                  <h4 style={{
                    color: '#C9BFB3',
                    margin: '0'
                  }}>
                    $14
                  </h4>
                </div>
              </div>
              <div style={{ 
                width: '250px',
                backgroundColor: '#1e1e1e',
                borderRadius: '15px',
                border: "1px solid #2A2A2A",
                overflow: 'hidden',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              }}  >
                <img src={coke} alt="Coke" style={{ width: '100%',
                   height: '150px', 
                   objectFit: 'cover' }} />
                <div style={{ padding: '15px' }}>
                  <h3 style={{
                    color: '#D4AF37',
                    margin: '0'
                  }}> Coke
                  </h3>
                  <h4 style={{
                    color: '#C9BFB3',
                    margin: '0'
                  }}>
                    $2
                  </h4>
                </div>
              </div>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default MainContent
