import React from 'react'

export default function Deskstop(){
    return (
        <>
        <div className = 'deskstop'>
            <div className='deskstop-navbar'>
                <p>Men’s Shoes</p>
                <p>Woman’s Shoes</p>
                <p>New Arrivals</p>
                <p>Collections</p>
                <p>Sale</p>
                <img src ='./Assets/contact_icon.svg' alt ='contact_icon'/>
            </div>
            <div className='deskstop_search'>
                <div className='search-bar'>
                        <img src='./Assets/search_icon.svg' alt = 'search icon'/>
                        <input placeholder = 'serach for your drops...' className='roboto-medium'/>
                </div>
                <div className='location'>
                        <div className=' desksto-address'>
                        <img src ='./Assets/location-icon.png' alt='location icon'/>
                        <p>
                            <span> ship to </span>
                            Abesan Estate, Block 3, no 27 estate
                         </p>
                         </div>
                         <img src ='./Assets/Vector.svg' alt='next icon'/>
                         <img src ='./Assets/filter_icon.svg' alt='filter icon'/>
                         <img src ='./Assets/ticked_menu_icon.svg' alt='ticked menu icon'/>
                </div>
            </div>
            <div className='logos'>
                    <div className='logo'>
                        <img src='./Assets/addidas-logo.png' alt='Addidas logo'/>     
                    </div>
                    <div className='logo'>
                        <img src='./Assets/Vans_logo.png' alt='Vans logo'/>
                    </div>
                    <div className='logo'>
                        <img src='./Assets/NB-logo.png' alt='New Balance logo'/>
                    </div>
                    <div className='logo'>
                        <img src='./Assets/Nike_logo.png' alt='Nike logo'/>
                    </div>
            </div>
            <p className='deskstop_new_arrival'>New Arrivals</p>
            <div  className='deskstop_product'>
                <div className='analytic'>
                    <div className='analytic-img'>
                        <img 
                            src ='./Assets/NB_one_pair.png' 
                            alt='New Balance one pair image' 
                            className = 'image1'
                        />
                        <img 
                            src ='./Assets/Nike_one_pair.png' 
                            alt='Nike one pair image'
                           className = 'image2'
                        />
                        <img 
                            src ='./Assets/Adidas_one_pair.png' 
                            alt='Adidas one pair image'
                            className = 'image3'
                        />
                    </div>
                    <div className='analytic-text'>
                        <p className='analytic-text-header'>Year- End Sale</p>
                        <p className='analytic-text-percentage'>Up to 90%</p>
                        <button className='analytic-text-btn'> Shop Now </button>
                    </div>
                </div>
                <div>
                    <div className='arrow-div'>
                        <div className='deskstop_shoe_img'>
                        <img src='./Assets/Lebron20_BB_Shoes.png' alt = 'Lebron 20 Basketball shoes'/>
                        </div>
                        <div className='next_arrow_bg'>
                            <img src='./Assets/Arrow_2.svg' alt='Arrow'/>
                        </div>
                    </div>
                    
                    <div className='preview'>
                        <div className='picture'>
                            <img src='./Assets/Lebron20_preview.png' alt='vertical-view'/>
                        </div>
                        <div className='picture'>
                            <img src='./Assets/lebron20_top_view.png' alt='top-view'/>
                        </div>
                        <div className='picture'>
                            <img src='./Assets/lebron20_back_preview.png' alt='back-view'/>
                        </div>
                        <div className='picture'>
                            <img src='./Assets/lebron20_bottom_preview.png' alt='bottom-view'/>
                        </div>
                        <div className='desc'>
                                <p>LeBron 20 Basketball Shoes</p>
                                <span className='price'>$200</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}

// \contact_icon.svg\filter_icon.svg\ticked_menu_icon.svg\Arrow_2.svg\Arrow_2.svg