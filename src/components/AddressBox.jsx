import React, { useState } from 'react';
import "./StyleSheet.css"
import icLocate from "../assets/icon-locate.png"
import icGeoBtn from "../assets/icon-geo-button.svg"

function AddressBox({ setAddressValue }) {
    const [tempAddress, setTempAddress] = useState('');

    const handleInputChange = (event) => {
        setTempAddress(event.target.value);
    }

    const handleSearch = () => {
        setAddressValue(tempAddress); // Gửi giá trị tempAddress lên PromoInWhere
    }

    return (
        <>
            <div className="container">
                <div className="col-md-1">
                    <div className="p-3 mb-5 rounded absolute top-16p w-350 h-96 bg-white shadow-xl">
                        <div className="wrap-input pt-6 pl-4">
                            <h5 id="af" className="font-bold">Good Afternoon</h5>
                            <h1 id="where" className="font-bold mb-4">Where should we deliver your food today?</h1>
                            <div className="flex items-center relative mt-3 mb-3">
                                <img
                                className="absolute left-0 ml-2"
                                src={icLocate}
                                alt="Location"
                                ></img>
                                <input
                                className="search-input w-72 pt-2 pl-10 pb-2 border"
                                placeholder="Nhập địa chỉ của bạn"
                                type="text"
                                value={tempAddress}
                                onChange={handleInputChange}
                                ></input>
                                <img
                                className="absolute right-0 mr-4"
                                src={icGeoBtn}
                                alt="Geo Button"
                                ></img>
                            </div>
                            <div>
                                <button type="button" className="btn-search bg-green-500 text-white font-bold w-72 h-10 px-4 py-2" onClick={handleSearch}>Tìm kiếm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}



export default AddressBox;