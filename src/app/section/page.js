'use client';
import React, { useState, useEffect } from 'react';


const page = () => {
    const [auctionData, setAuctionData] = useState([]);

    useEffect(() => {
        const getPost = async () => {
            try {
                const res = await fetch('https://neo.auctiontiger.net/NPDUAT/eauction/unauth/auctionList/HomePage/1/2');
                const data = await res.json();
                setAuctionData(data.responseData || []);
            } catch (error) {
                console.error('Failed to fetch post:', error);
            } finally {
            }
        };

        getPost();
    }, []);

    return (
        <div>
            <h1>Auctions</h1>
            {auctionData?.responseMap?.mapList?.length > 0 ? (
                auctionData?.responseMap?.mapList?.map((item) => (
                    <div key={item.auctionid} style={{ borderBottom: '1px solid #ccc', marginBottom: '1rem' }}>
                        <h2>{item.auctionbrief}</h2>
                        <p><strong>Department:</strong> {item.deptname}</p>
                        <p><strong>Status:</strong> {item.auctionstatus}</p>
                        <p><strong>Start:</strong> {item.startdate}</p>
                        <p><strong>End:</strong> {item.enddatevirtual}</p>
                    </div>
                ))
            ) : (
                <p>No auctions found.</p>
            )}
        </div>
    );
};

export default page;
