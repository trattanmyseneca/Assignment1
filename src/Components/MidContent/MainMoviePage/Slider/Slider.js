import React from 'react'

const Slider = () => {
    return (
        <div className="top-news">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 tn-left">
                        <div className="row tn-slider">
                            <div className="col-md-6">
                                <div className="tn-img">
                                    <img src="img/news-450x350-1.jpg" style={{height:"250px"}} />
                                    <div className="tn-title">
                                        <a href="">Best TV Show</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="tn-img">
                                    <img src="img/news-450x350-2.jpg" style={{height:"250px"}} />
                                    <div className="tn-title">
                                        <a href="">Best Movie of the Year</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Slider
