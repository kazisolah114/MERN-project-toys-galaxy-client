import React, { useEffect, useState } from 'react';
import './ShopByCategory.css'
import Toy from './Toy';

const ShopByCategory = () => {
    const [toys, setToys] = useState([])
    const [activeTab, setActiveTab] = useState("Racing")
    const handleTabName = tabName => {
        setActiveTab(tabName)
    }
    useEffect(() => {
        fetch('https://toys-beast-server-kazisolah114.vercel.app/alltoys')
        .then(res => res.json())
        .then(data => {
            setToys(data)
        })
    }
    ,[])
    // console.log(toys)
    return (
        <div className='py-5'>
            <div className='shop-by-category'>
                <h2 className='text-center'>Shop By Category</h2>
                <div className="tabs d-flex align-items-center justify-content-between mt-5">
                    <div onClick={() => handleTabName("Racing")} className={`tab racing ${activeTab == "Racing" ?
                            "bg-put border-put text-white"
                            :
                            ""
                        }`}>
                        Racing Car
                    </div>
                    <div onClick={() => handleTabName("Tructor")} className={`tab tructor ${activeTab == "Tructor" ?
                            "bg-put border-put text-white"
                            :
                            ""
                        }`}>
                        Tructor Car
                    </div>
                    <div onClick={() => handleTabName("Super")} className={`tab super ${activeTab == "Super" ?
                            "bg-put border-put text-white"
                            :
                            ""
                        }`}>
                        Super Car
                    </div>
                </div>
            </div>
            <div className='d-flex flex-wrap mx-auto gap-5 py-5 toy-container'>
                {
                    toys?.map(toy => <Toy key="toy._id" toy={toy}></Toy>)
                }
            </div>
        </div>
    );
};

export default ShopByCategory;