import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import NotFound from './pages/NotFound';
import LoadingBar from 'react-top-loading-bar';

function App() {
    const ref = useRef(null);

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    useEffect(() => {
        const navToggle = document.querySelector('.nav__toggle');
        const navCollapse = document.querySelector('.nav__collapse');

        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navCollapse.classList.toggle('show');
        });

        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navCollapse.contains(e.target)) {
                navToggle.classList.remove('active');
                navCollapse.classList.remove('show');
            }
        });

        window.addEventListener('scroll', function () {
            const nav = document.querySelector('.nav');
            const windowPosition = window.scrollY > 0;
            nav.classList.toggle('scroll', windowPosition);
        });

        document.querySelectorAll('.nav__link').forEach(el => {
            el.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navCollapse.classList.remove('show');
            });
        });
    }, []);

    return (
        <div className='main-container'>
            <LoadingBar color="#570df8" ref={ref} />
            <nav className='nav'>
                <div className='nav__container'>
                    <Link className='nav__brand nav__brand-mobile' to='/'>
                        JasaCetak
                    </Link>
                    <div className='nav__menu'>
                        <Link className='nav__brand nav__brand-desktop' to='/'>
                            JasaCetak
                        </Link>
                        <button className='nav__toggle'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <div className='nav__collapse'>
                            <div className='nav__links'>
                                <Link onClick={() => ref.current.continuousStart()} className={splitLocation[1] === "" ? "nav__link active" : "nav__link"} to='/'>
                                    Beranda
                                </Link>
                                <Link onClick={() => ref.current.continuousStart()} className={splitLocation[1] === "tentang" ? "nav__link active" : "nav__link"} to='/tentang'>
                                    Tentang
                                </Link>
                                <Link onClick={() => ref.current.continuousStart()} className={splitLocation[1] === "kontak" ? "nav__link active" : "nav__link"} to='/kontak'>
                                    Kontak
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path='/' element={<Home stopLoading={() => ref.current.complete() } />} />
                <Route path='/tentang' element={<About stopLoading={() => ref.current.complete() } />} />
                <Route path='/kontak' element={<Contact stopLoading={() => ref.current.complete() } />} />
                <Route path='/*' element={<NotFound stopLoading={() => ref.current.complete() } />} />
            </Routes>
            <footer className="items-center p-4 footer border-t border-gray-200 text-base-content mt-20">
                <div className="items-center grid-flow-col">
                    <p>Copyright © 2022 - jasacetak</p>
                </div> 
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a>
                        {/* fb */}
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path></svg>
                    </a> 
                    <a>
                        {/* yt */}
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path></svg>
                    </a> 
                    <a>
                        {/* twt */}
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path></svg>
                    </a>
                    <a>
                        {/* ig */}
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" className="fill-current">
                            <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path>
                            <circle cx="11.994" cy="11.979" r="3.003"></circle>
                        </svg>
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default App;