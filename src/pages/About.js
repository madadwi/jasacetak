import { useState, useEffect } from 'react';

export default function About(props) {
    const [team, setTeam] = useState([]);
    const [latestOrder, setLatestOrder] = useState([]);

    useEffect(() => {
        props.stopLoading();
        window.scrollTo(0, 0);

        document.title = "Tentang JasaCetak - JasaCetak Online";

        async function getData(url, type) {
            const request = await fetch(url);
            const response = await request.json();

            switch (type) {
                case 'team':
                    setTeam(response)
                    break;

                case 'latestOrder':
                    setLatestOrder(response)
                    break;
            }
        }

        getData('/data/team.json', "team");
        getData('/data/latestOrder.json', "latestOrder");
    }, [props]);

    return (
            <section className="mt-28">
                <div className="container space-y-20">
                    <div className="grid lg:grid-cols-2 gap-10">
                        <img className="mx-auto rounded-3xl w-full" src="/img/hero.jpeg" alt="JasaCetak" />
                        <div>
                            <h1 className="font-black xl:text-4xl lg:text-3xl md:text-4xl sm:text-3xl text-2xl leading-tight text-gray-800 mb-4">
                                Tentang Jasa Kami
                            </h1>
                            <div className="space-y-2">
                                <p className="tracking-wide text-gray-500 lg:text-base md:text-xl text-sm">
                                Jasa Cetak adalah sebuah toko yang menyediakan berbagai macam percetakan seperti sablon,banner,stiker,kartunama, dan lain-lain. Bermula dari sebuah bangunan yang berlokasi di Jalan Kampung Aden. 
                                </p>
                                <p className="tracking-wide text-gray-500 lg:text-base md:text-xl text-sm">
                                Seiring dengan semakin berkembangnya teknologi, maka kami mencoba berinovasi dalam berbisnis. Salah satu bentuk inovasinya adalah dengan menyediakan berbagai layanan toko kami melalui media internet, dan toko online ini adalah salah satu bentuk pelayanan kami kepada Anda.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-black xl:text-4xl lg:text-3xl md:text-4xl sm:text-3xl text-2xl leading-tight text-gray-800 mb-4">
                            Orderan Terbaru Kami
                        </h1>
                        <p className="tracking-wide text-gray-500 lg:text-base md:text-xl text-sm">
                        Berikut contoh hasil-hasil dari jasa cetak kami.
                        </p>
                        <div className="lg:columns-6 sm:columns-3 columns-2 space-y-4 mt-6">
                            {latestOrder.map((img => {
                                return <img key={img} className="rounded-xl" src={`/img/order/${img}`} alt="" />;
                            }))}
                        </div>
                    </div>
                    <div>
                        <h1 className="font-black text-center xl:text-4xl lg:text-3xl md:text-4xl sm:text-3xl text-2xl leading-tight text-gray-800 mb-4">
                            Tim Kami
                        </h1>
                        <div className="flex justify-center gap-4 flex-wrap">
                            {team.map(org => {
                                return (
                                    <div key={org.id} className="text-center border border-gray-200 py-12 px-8 rounded-xl min-w-[20%-1rem]">
                                        <img className="w-28 aspect-[1/1] object-cover rounded-full mx-auto mb-4 p-2 border-2 border-primary border-dashed" src={`/img/team/` + org.foto} alt="" />
                                        <h2 className="font-bold text-gray-800 text-lg">{org.nama}</h2>
                                        <p className="font-bold text-primary">{org.posisi}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
    );
}
