import React from 'react';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ToolboxCarousel(){

    return (
        <Carousel 
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3000}
        >
            <>
                <img class="tool-image" src="https://res.cloudinary.com/practicaldev/image/fetch/s--jvDLhx0b--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/cpcr5w0kgl6j94tss7n9.png" alt="Ruby on Rails"></img>
            </>
            <>
                <img class="tool-image" src="https://sisnolabs.com/blog/wp-content/uploads/2020/09/reactjs.png" alt="React"/>
            </>
            <>
                <img class="tool-image" src="https://techvccloud.mediacdn.vn/zoom/650_406/2018/11/23/js-15429579443112042672363-crop-1542957949936317424252.png" alt="JavaScript"/>   
            </>
            <>
                <img class="tool-image" src="https://pixelmechanics.com.sg/wp-content/uploads/2019/06/html5-logo-for-web-development.png" alt="HTML"/> 
            </>
            <>
                <img class="tool-image" src="https://allvectorlogo.com/img/2016/04/css3-logo.png" alt="CSS"/>
            </>
        </Carousel>
    )
}

export default ToolboxCarousel;