import React from "react";

const handphone = () => {
    const data = [
        {
            id: '1',
            nama: 'Redmi 9',
            harga: 'Rp. 1.599.000',
            warna: 'Grey',
            foto: '/Redmi9.jpg',
        },
        {
            id: '2',
            nama: 'Redmi 9A',
            harga: 'Rp. 1.179.000',
            warna: 'Blue',
            foto: '/Redmi9A.jpg',
        },
        {
            id: '3',
            nama: 'Redmi 9C',
            harga: 'Rp. 1.399.000',
            warna: 'Blue',
            foto: '/Redmi9C.jpg',
        },
        {
            id: '4',
            nama: 'Redmi 9T',
            harga: 'Rp. 2.399.000',
            warna: 'Orange',
            foto: '/Redmi9T.jpg',
        },
        {
            id: '5',
            nama: 'Redmi 10',
            harga: 'Rp. 2.399.000',
            warna: 'Gold',
            foto: '/Redmi10.jpg',
        },
        {
            id: '6',
            nama: 'Redmi Note 8',
            harga: 'Rp. 2.699.000',
            warna: 'Blue',
            foto: '/RedmiNote8.jpg',
        },
        {
            id: '7',
            nama: 'Redmi Note 9',
            harga: 'Rp. 2.399.000',
            warna: 'White',
            foto: '/RedmiNote9.jpg',
        },
    ];

    return (
        <div className="shadow pb-10">
            <h2 className="text-blue-100 bg-red-500 pt-2 font-sans text-xl font-bold pb-4 text-gray-800 text-center">
                Katalog Handphone
            </h2>
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-8 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-normal tracking-tight text-gray-900">
                        Redmi
                    </h2>
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {data.map((produk) => (
                        <div key={produk.id} className="group relative">
                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img
                            src={produk.foto}
                            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                            />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                            <h3 className="text-sm text-gray-700">
                                <a>
                                <span aria-hidden="true" className="absolute inset-0" />
                                {produk.nama}
                                </a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">{produk.warna}</p>
                            </div>
                            <p className="text-sm font-medium text-gray-900">{produk.harga}</p>
                        </div>
                        </div>
                    ))}
                    </div>
                    <div className="flex flex-col items-center justify-center bg-red-100 shadow-md">
                        <h3 className="font-normal text-base">
                            *Harga per September 2021
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default handphone;