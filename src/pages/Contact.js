import { useEffect } from "react";

export default function Contact(props) {
    useEffect(() => {
        props.stopLoading();
        window.scrollTo(0, 0);

        document.title = "Kontak Kami - JasaCetak Online";
    }, [props]);
    
    return (
        <section className="sm:mt-28 mt-20">
            <div className="container space-y-20">
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h1 className="font-black xl:text-4xl lg:text-3xl md:text-4xl sm:text-3xl text-2xl leading-tight text-gray-800 mb-4">
                            Kontak
                        </h1>
                        <div className="space-y-2 prose sm:prose-base prose-sm max-w-none">
                            <p>
                                jika ada yg di tanyakan mengenai toko kami silahkan untuk mengirimkan pesan...
                            </p>
                            <ul>
                                <li>Email: <a href="mailto:contoh@gmail.com">madadwisaputra551@gmail.com</a></li>
                                <li>Instagram: <a href="#">@jasaCetak&Sablon</a></li>
                                {/* <li>Twitter: <a href="#">@contoh</a></li>
                                <li>Youtube: <a href="#">contoh</a></li> */}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <form method="" action="" className="space-y-3">
                            <div className="grid sm:grid-cols-2 gap-3">
                                <div className="form-control">
                                    <label className="label" htmlFor="nama">
                                        <span className="label-text">Nama</span>
                                    </label> 
                                    <input placeholder="Nama..." id="nama" name="nama" className="input input-bordered" type="text" />
                                </div>
                                <div className="form-control">
                                    <label className="label" htmlFor="email">
                                        <span className="label-text">Email</span>
                                    </label> 
                                    <input placeholder="Email..." id="email" name="email" className="input input-bordered" type="email" />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label" htmlFor="pesan">
                                    <span className="label-text">Pesan</span>
                                </label> 
                                <textarea placeholder="Pesan..." id="pesan" name="pesan" className="textarea h-24 textarea-bordered"></textarea>
                            </div>
                            <button className="btn btn-primary">Kirim</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}