import React, { useState } from 'react';
import AddressBox from './AddressBox';

function PromoInWhere() {
    const [addressValue, setAddressValue] = useState('Chưa có vị trí...');

    return (
        <>
            <div className="container-sm">
                <AddressBox setAddressValue={setAddressValue} />
                <h2 className="text-2xl font-bold">Ưu đãi GrabFood tại <span className="text-green-500">{addressValue}</span></h2>
            </div>
        </>
    );
}

export default PromoInWhere;
