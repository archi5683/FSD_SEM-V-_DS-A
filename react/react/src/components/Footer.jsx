import React from 'react'

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#1e1e1e', 
    padding: '20px',
     textAlign: 'center', 
     color: '#f5f0eb',
     borderTop: '1px solid #2A2A2A',
     textAlign: 'center',
      }}>
    <h2 style={{
        fontFamily: 'Great Vibes, cursive',
        fontSize: '24px',
        color: '#D4AF37',
        }}>
            The Rustic Spoon
    </h2>
        <div
          style={{
            fontSize: '14px',
            color: '#C9BFB3',
          }}>
            <p>
                Ghaziabad, Uttar Pradesh, India
            </p>
            <p>
                Phone: +91 1234567890
            </p>
            <p>
                Email: info@therusticspoon.com
            </p>
            <p>
                Mon - Sun: 10:00 AM - 10:00 PM
            </p>
        </div>

    </div>
  )
}

export default Footer