import React, {useState, useEffect} from 'react';



function SideNav(){
    return (
        <aside id="side-nav">
            <div class="side-nav-content">
                <div class="side-nav-content--logo">
                    <img class="thumbnail" src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.18169-9/17553454_10155954908994377_9063251783967786210_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=174925&_nc_ohc=4xieCM_JLRAAX_Qcg8d&tn=gijdTxxC-2GrXrcK&_nc_ht=scontent-lga3-1.xx&oh=3d0f9ef2f1c971209db17894e4e19059&oe=60DE3DD4"/>
                    
                </div>
                <ul class="side-nav-content--social">
                    <a href="https://www.linkedin.com/in/cameron-bisca/"><i class="social-icons">L</i></a>
                    <a href="https://github.com/cambisca"><i class="social-icons">G</i></a>
                    <a href="https://cjbisca.medium.com/"><i class="social-icons">M</i></a>
                    
                </ul>
            </div>
        </aside>
    )
}

export default SideNav;