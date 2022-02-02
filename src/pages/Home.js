import { Menu, Transition } from '@headlessui/react';
import { useState, useEffect } from 'react';

export default function Home(props) {
    const [data,setData]=useState([]);

    const pesanOrder = "Halo JasaCetak, saya ingin menggunakan jasa cetaknya, bisa dibantu?";
    const nomorOrder = 6285710316668;

    useEffect(() => {
        props.stopLoading();

        window.scrollTo(0, 0);

        document.title = "Cetak stiker, banner, kartu nama, sampai banner - JasaCetak Online";
        
        async function getData() {
            const request = await fetch('/data/dataJual.json');
            const response = await request.json();

            setData(response);
        }

        getData();
    }, [props]);


    return (
        <>
            <section className="sm:min-h-screen flex items-center lg:m-0 sm:my-16 my-20">
                <div className="container grid lg:grid-cols-2 items-center sm:gap-10 gap-4">
                    <div className="space-y-5 lg:order-1 order-2 lg:text-left text-center">
                        <h1 className="font-black xl:text-6xl lg:text-5xl md:text-6xl sm:text-5xl text-4xl leading-tight text-gray-800">
                            Buat aset onlinemu sekarang juga!
                        </h1>
                        <p className="tracking-wide text-gray-500 lg:text-base md:text-xl text-sm">
                            Membuka jasa cetak online bagi kalian yang membutuhkan jasa cetak mulai dari <span className="badge badge-secondary">stiker</span>, <span className="badge badge-secondary">banner</span>, <span className="badge badge-secondary">kartu nama</span>, sampai <span className="badge badge-secondary">foto polaroid</span>.
                        </p>
                        <Menu as="div" className="relative mx-auto">
                            <Menu.Button className="btn btn-primary flex gap-1 max-w-max">
                                Order 
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </Menu.Button>
                            <Transition
                                enter="transition ease-out duration-150 origin-top-left"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-150 origin-top-left"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="bg-white absolute p-4 left-0 top-full w-34 border border-gray-200 rounded-md flex flex-col focus:outline-none">
                                    {data.map(item => {
                                        return (
                                            <Menu.Item key={item.id}>
                                                    {({ active }) => (
                                                        <a className={`py-2 px-4 rounded-md text-gray-500 transition-all ${active && 'bg-primary text-white'}`} href={`#${item.id}`}>
                                                            {item.judul}
                                                        </a>
                                                    )}
                                            </Menu.Item>
                                        )
                                    })}
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                    <div className="relative lg:order-2 order-1">
                        <img className="mx-auto rounded-3xl" src="/img/hero.jpeg" alt="JasaCetak" />
                    </div>
                </div>
            </section>

            {data.map(row => {
                return (
                    <section key={row.id} className="mt-20" id={row.id}>
                        <div className="container">
                            <div className="text-center">
                                <p className="tracking-widest font-bold md:text-lg sm:text-base text-sm text-indigo-600 uppercase">- Jasa -</p>
                                <h2 className="md:text-5xl sm:text-4xl text-3xl font-black text-gray-800">{row.judul}</h2>
                            </div>

                            <div className="mt-10">
                                <div className="flex flex-wrap justify-center gap-8">
                                    {row.paket.map(pkg => {
                                        return (
                                            <div key={pkg.namaPaket} className="text-center min-w-80 w-80 max-w-full px-8 bg-white py-8 rounded-xl border border-gray-200 hover:shadow-2xl hover:shadow-indigo-600/20 hover:border-transparent transition-all duration-300">
                                                <img className="h-28 w-28 rounded-full object-cover mx-auto mb-2" src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png" alt="" />
                                                <h2 className="uppercase font-bold text-gray-500 text-xl">{pkg.namaPaket}</h2>
                                                <div className="my-8 text-indigo-400 border-t border-indigo-200">
                                                    {pkg.fitur.map(ft => {
                                                        return <p key={ft.namaFitur} className="border-b border-indigo-200 py-4">{ft.namaFitur}</p>
                                                    })}
                                                </div>
                                                <p className="text-3xl font-bold text-primary">RP {pkg.harga}<span className="text-gray-500 text-sm">/{pkg.orderPer}</span></p>
                                                <a 
                                                    target="_blank" 
                                                    rel="noreferrer"  
                                                    href={`https://api.whatsapp.com/send?phone=${nomorOrder}&text=${pesanOrder} Saya ingin memesan jasa cetak *${row.judul}* dengan paket *${pkg.namaPaket}* seharga *${pkg.harga}/${pkg.orderPer}*`} 
                                                    className="btn btn-outline btn-primary my-5">
                                                    Order
                                                </a>
                                                {pkg.jasaTambahan.status && (
                                                    <div className="bg-primary rounded-xl py-4 px-5 text-left">
                                                        <h3 className="font-bold text-white">Jasa Tambahan</h3>
                                                        {pkg.jasaTambahan.jasa.map(opt => {
                                                            return <small key={opt.namaJasa} className="block text-indigo-200">* {opt.namaJasa} + Rp {opt.hargaJasa}/{opt.jasaPer}</small>
                                                        })}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })}
        </>
    );
}
