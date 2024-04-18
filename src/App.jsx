import { useState,useEffect } from 'react'
// import LandingPage from './Site Loader/LandingPage'
// import Loader from './Site Loader/Loader'
import { motion,AnimatePresence } from 'framer-motion'
import MainLayout from './Layout/MainLayout'
import Loading from './Loading Animation/Index'



function App() {
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(true)
    },5500)
    return ()=>clearTimeout(timer)
  },[])


  return (
    <AnimatePresence>
      {
        !loading? (
          <motion.div key="loader">
            {/* <Loader setLoading={setLoading}/> */}
            <Loading />
          </motion.div>):(
          <motion.div>
              <MainLayout />
          </motion.div>)
          
      }
      
      
    </AnimatePresence>
  )
}

export default App
