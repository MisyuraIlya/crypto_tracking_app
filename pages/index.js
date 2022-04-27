import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import Table from '../components/Table';
import Filter from '../components/Filter';
import Features from '../components/Features';
import Team from '../components/Team';

export default function Home() {

  const [darkTheme, setDarkTheme] = useState(false);

  const data = [
    {id:0, method:'Transder', time:'38 sec', from:'0xa37110C202729dd8b0621d85F8412cA02037268b', to:'0x105Bc5aeE19253178699C24e4ba1944Df2F014EC', amount:'3ETH'},
    {id:1, method:'Transder', time:'38 sec', from:'0xa37110C202729dd8b0621d85F8412cA02037268b', to:'0x105Bc5aeE19253178699C24e4ba1944Df2F014EC', amount:'3ETH'},
    {id:2, method:'Transder', time:'38 sec', from:'0xa37110C202729dd8b0621d85F8412cA02037268b', to:'0x105Bc5aeE19253178699C24e4ba1944Df2F014EC', amount:'3ETH'},
    {id:3, method:'Transder', time:'38 sec', from:'0xa37110C202729dd8b0621d85F8412cA02037268b', to:'0x105Bc5aeE19253178699C24e4ba1944Df2F014EC', amount:'3ETH'},
    {id:4, method:'Transder', time:'38 sec', from:'0xa37110C202729dd8b0621d85F8412cA02037268b', to:'0x105Bc5aeE19253178699C24e4ba1944Df2F014EC', amount:'3ETH'},
    {id:5, method:'Transder', time:'38 sec', from:'0xa37110C202729dd8b0621d85F8412cA02037268b', to:'0x105Bc5aeE19253178699C24e4ba1944Df2F014EC', amount:'3ETH'},
    {id:6, method:'Transder', time:'38 sec', from:'0xa37110C202729dd8b0621d85F8412cA02037268b', to:'0x105Bc5aeE19253178699C24e4ba1944Df2F014EC', amount:'3ETH'},
    {id:7, method:'Transder', time:'38 sec', from:'0xa37110C202729dd8b0621d85F8412cA02037268b', to:'0x105Bc5aeE19253178699C24e4ba1944Df2F014EC', amount:'3ETH'},
    {id:8, method:'Transder', time:'38 sec', from:'0xa37110C202729dd8b0621d85F8412cA02037268b', to:'0x105Bc5aeE19253178699C24e4ba1944Df2F014EC', amount:'3ETH'},
    {id:9, method:'Transder', time:'38 sec', from:'0xa37110C202729dd8b0621d85F8412cA02037268b', to:'0x105Bc5aeE19253178699C24e4ba1944Df2F014EC', amount:'3ETH'},
    {id:10, method:'Transder', time:'38 sec', from:'0xa37110C202729dd8b0621d85F8412cA02037268b', to:'0x105Bc5aeE19253178699C24e4ba1944Df2F014EC', amount:'3ETH'},
    {id:11, method:'Transder', time:'38 sec', from:'0xa37110C202729dd8b0621d85F8412cA02037268b', to:'0x105Bc5aeE19253178699C24e4ba1944Df2F014EC', amount:'3ETH'},
    {id:12, method:'Transder', time:'38 sec', from:'0xa37110C202729dd8b0621d85F8412cA02037268b', to:'0x105Bc5aeE19253178699C24e4ba1944Df2F014EC', amount:'3ETH'},
    {id:13, method:'Transder', time:'38 sec', from:'0xa37110C202729dd8b0621d85F8412cA02037268b', to:'0x105Bc5aeE19253178699C24e4ba1944Df2F014EC', amount:'3ETH'},
    {id:14, method:'Transder', time:'38 sec', from:'0xa37110C202729dd8b0621d85F8412cA02037268b', to:'0x105Bc5aeE19253178699C24e4ba1944Df2F014EC', amount:'3ETH'},
    {id:15, method:'Transder', time:'38 sec', from:'0xa37110C202729dd8b0621d85F8412cA02037268b', to:'0x105Bc5aeE19253178699C24e4ba1944Df2F014EC', amount:'3ETH'},
    {id:16, method:'Transder', time:'38 sec', from:'0xa37110C202729dd8b0621d85F8412cA02037268b', to:'0x105Bc5aeE19253178699C24e4ba1944Df2F014EC', amount:'3ETH'},
    {id:17, method:'Transder', time:'38 sec', from:'0xa37110C202729dd8b0621d85F8412cA02037268b', to:'0x105Bc5aeE19253178699C24e4ba1944Df2F014EC', amount:'3ETH'},
    {id:18, method:'Transder', time:'38 sec', from:'0xa37110C202729dd8b0621d85F8412cA02037268b', to:'0x105Bc5aeE19253178699C24e4ba1944Df2F014EC', amount:'3ETH'},
  ]

  const options = ['select',5,15,30]
  const [selectOption, setSelectOption] = useState(options[0])
  const [hash, setHash] = useState(data)
  const [buttonShow, setButtonShow] = useState(false)

  const update = () => {
    console.log('new transactions')
  }
  
  const sortedData = (size) => {
    const sort = data.splice(0,Number(size))
    setHash(sort)
  }
  
  const ShowButton = () => {
    setTimeout(() => {
      setButtonShow(true);
    }, 15000)
  }
  
  useEffect(() => {
    ShowButton()
  }, [data])

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <Hero/>
        <Filter sortedData={sortedData} options={options} selectOption={selectOption} setSelectOption={setSelectOption}/>
        <Table buttonShow={buttonShow} update={update} hash={hash}/>
        <Features/>
        <Team/>
        </div>
    </div>
  )
}
