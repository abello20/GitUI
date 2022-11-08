import React from 'react'
import { Navbar } from './Navbar';
import { PageDisplay } from './PageDisplay';

export const Home = () => {
  return (
    <>  
        <Navbar />
        <PageDisplay />

        <footer style={{background:"Black", color:"Gray", padding:'1rem 1rem'}}> 
            All right reserved 2022 @KopeeTearia
        </footer>
    </>
  )
}
