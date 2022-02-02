import { useEffect } from "react";

export default function NotFound(props) {
    useEffect(() => {
        props.stopLoading();
        window.scrollTo(0, 0);

        document.title = "Halaman Tidak Ditemukan - JasaCetak Online";
    }, [props]);

    return (
        <div className="container min-h-screen grid">
            <p className="text-sm text-gray-500 italic m-auto">Halaman tidak ditemukan</p>
        </div>
    );
}