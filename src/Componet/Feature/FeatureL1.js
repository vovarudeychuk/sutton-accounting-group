import React from 'react'

function FeatureL1() {
  const gototop=()=>{
    window.scrollTo({top:0,behavior:"smooth"})
}
    return (
      <>
         <section>
          <div class="container">
            <div
              class="row justify-content-between align-items-center mb-4 mb-lg-0"
            >
              <div class="col-lg-6 col-md-5">
                <div>
                  <h2>
                    <span class="font-w-4 d-block"
                      >We focus on your business</span>
                    need and provide best
                  </h2>
                  <p class="lead">
                    We use the latest technologies it voluptatem accusantium
                    doloremque laudantium, totam rem aperiam.
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-md-7">
                <div class="p-5 feature-hover active position-relative">
                  <div class="f-icon"><i class="flaticon-prototype"></i></div>
                  {/* <img src={require("../../../../assets/icon/feedback.png")} className='cimg' /> */}
                  <h5 class="mt-4 mb-3">Design & Creativity</h5>
                  <p class="mb-0">
                    Taking design from winck design and typography, contemporary
                    page layouts.
                  </p>
                </div>
              </div>
            </div>
            <div class="row mt-lg-n5 align-items-center">
              <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div class="p-5 feature-hover position-relative">
                  <div class="f-icon"><i class="flaticon-knowledge"></i></div>
                  <h5 class="mt-4 mb-3">Technology Innovation</h5>
                  <p class="mb-0">
                    Taking design from winck design and typography, contemporary
                    page layouts.
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div class="p-5 feature-hover position-relative">
                  <div class="f-icon"><i class="flaticon-thumbs-up"></i></div>
                  <h5 class="mt-4 mb-3">Digital Marketing</h5>
                  <p class="mb-0">
                    Taking design from winck design and typography, contemporary
                    page layouts.
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-12 text-center">
                <div class="btn btn-primary mt-lg-8" onClick={gototop}>
                  View All Services
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
}

export default FeatureL1
