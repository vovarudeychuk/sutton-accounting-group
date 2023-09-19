import React from 'react'

function HerosectionL4() {
    return (
        <>
            <section className="custom-py-1 position-relative hero-shape3 overflow-hidden">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-5 col-xl-6 order-lg-2 mb-8 mb-lg-0">
                            {/* <!-- Image --> */}
                            <img src={require("../../assets/images/hero/02.png")} className="img-fluid" alt="..." />
                        </div>
                        <div className="col-12 col-lg-7 col-xl-6 order-lg-1">
                            <h1 className="display-4 mb-3">
                                Winck Your App <span className="font-w-7">Batter & Faster</span>
                            </h1>
                            {/* <!-- Text --> */}
                            <p className="lead text-muted mb-4">We use the latest technologies it voluptatem accusantium doloremque laudantium. Build a Beautiful, Clean & Modern Design website with flexible Bootstrap components.</p>
                            {/* <!-- Buttons --> */}
                            <div className="btn btn-sm btn-primary text-start me-1"> <i className="la la-apple me-2 ic-2x d-inline-block"></i>
                                <div className="d-inline-block"> <small className="d-block">Available On The</small>
                                    App Store</div>
                            </div>
                            <div className="btn btn-sm btn-dark text-start"> <i className="la la-android me-2 ic-2x d-inline-block"></i>
                                <div className="d-inline-block"> <small className="d-block">Android App On</small>
                                    Google Play</div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- / .row --> */}
                </div>
                {/* <!-- / .container --> */}
            </section>
        </>
    )
}

export default HerosectionL4
