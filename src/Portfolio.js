import React from 'react'
import  './style.css'
import img1 from './img/portfolio/img12.jpg'
import img2 from './img/portfolio/img2.jpg'
import img7 from './img/portfolio/img7.jpg'
import img12 from './img/portfolio/img5.jpg'



import img9 from './img/portfolio/img9.jpg'
import img10 from './img/portfolio/img10.jpg'
export const Portfolio = () => {
    return (
        <div>
            <section className="page-section portfolio" id="portfolio">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase" style={{color:"white"}}>Hut View</h2>
          <h3 className="section-subheading " style={{color:"#000000"}}>check our Hut view images .</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x"></i> 
              </div>
            </div>
            {/* <!--image--> */}
            <img  className="w-100 p-3"  style={{ backgroundImage:`url(${img1})`, height: 190
       }}    alt=""/>
          </a>
          <div className="portfolio-caption">
            <h4>HUT-1</h4>
            {/* <p className="text-muted">CHECK</p> */}
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img style={{ backgroundImage:`url(${img2})` ,height: 190}} className="w-100 p-3"  alt=""/>
          </a>
          <div className="portfolio-caption">
            <h4>HUT-2</h4>
            {/* <p className="text-muted">CHECK</p> */}
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img style={{ backgroundImage:`url(${img7})`,height: 190 }} className="w-100 p-3"  alt="" />
          </a>
          <div className="portfolio-caption">
            <h4>HUT-3</h4>
            {/* <p className="text-muted">CHECK</p> */}
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img style={{ backgroundImage:`url(${img9})`,height: 190 }} className="w-100 p-3"  alt="" />
          </a>
          <div className="portfolio-caption">
            <h4>HUT-4</h4>
            {/* <p className="text-muted">CHECK</p> */}
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="#portfolioModal5">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img style={{ backgroundImage:`url(${img10})`,height: 190 }} className="w-100 p-3"  alt="" />
          </a>
          <div className="portfolio-caption">
            <h4>HUT-5</h4>
            {/* <p className="text-muted">CHECK</p> */}
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img style={{ backgroundImage:`url(${img12})`,height: 190 }} className="w-100 p-3"  alt="" />
          </a>
          <div className="portfolio-caption">
            <h4>HUT-6</h4>
            {/* <p className="text-muted">CHECK</p> */}
          </div>
        </div>
      </div>
    </div>
  </section>
   {/* <!-- Portfolio Modals -->

<!-- Modal 1 --> */}
<div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="close-modal" data-dismiss="modal">
        <div className="lr">
          <div className="rl"></div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="modal-body">
              {/* <!-- Project Details Go Here --> */}
              <h2 className="text-uppercase">Project Name</h2>
              <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
              <img class="img-fluid d-block mx-auto" style={{ backgroundImage:`url(${img1})` }} alt=""/>
              <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
              <ul className="list-inline">
                <li>Date: January 2017</li>
                <li>Client: Threads</li>
                <li>Category: Illustration</li>
              </ul>
              <button className="btn btn-primary" data-dismiss="modal" type="button">
                <i className="fas fa-times"></i>
                Close Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* <!-- Modal 2 --> */}
  <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="close-modal" data-dismiss="modal">
          <div className="lr">
            <div className="rl"></div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="modal-body">
                {/* <!-- Project Details Go Here --> */}
                <h2 className="text-uppercase">Project Name</h2>
                <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img className="img-fluid d-block mx-auto" style={{ backgroundImage:`url(${img2})` }} alt=""/>
                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                <ul className="list-inline">
                  <li>Date: January 2017</li>
                  <li>Client: Explore</li>
                  <li>Category: Graphic Design</li>
                </ul>
                <button className="btn btn-primary" data-dismiss="modal" type="button">
                  <i className="fas fa-times"></i>
                  Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Modal 3 --> */}
  <div className="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="close-modal" data-dismiss="modal">
          <div className="lr">
            <div className="rl"></div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="modal-body">
                {/* <!-- Project Details Go Here --> */}
                <h2 className="text-uppercase">Project Name</h2>
                <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img className="img-fluid d-block mx-auto" style={{ backgroundImage:`url(${img7})` }} alt=""/>
                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                <ul className="list-inline">
                  <li>Date: January 2017</li>
                  <li>Client: Finish</li>
                  <li>Category: Identity</li>
                </ul>
                <button className="btn btn-primary" data-dismiss="modal" type="button">
                  <i className="fas fa-times"></i>
                  Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Modal 4 --> */}
  <div className="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="close-modal" data-dismiss="modal">
          <div className="lr">
            <div className="rl"></div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="modal-body">
                {/* <!-- Project Details Go Here --> */}
                <h2 className="text-uppercase">Project Name</h2>
                <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img className="img-fluid d-block mx-auto" style={{ backgroundImage:`url(${img9})` }} alt=""/>
                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                <ul className="list-inline">
                  <li>Date: January 2017</li>
                  <li>Client: Lines</li>
                  <li>Category: Branding</li>
                </ul>
                <button className="btn btn-primary" data-dismiss="modal" type="button">
                  <i className="fas fa-times"></i>
                  Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Modal 5 --> */}
  <div className="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="close-modal" data-dismiss="modal">
          <div className="lr">
            <div className="rl"></div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="modal-body">
                {/* <!-- Project Details Go Here --> */}
                <h2 className="text-uppercase">Project Name</h2>
                <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img className="img-fluid d-block mx-auto" style={{ backgroundImage:`url(${img10})` }} alt=""/>
                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                <ul className="list-inline">
                  <li>Date: January 2017</li>
                  <li>Client: Southwest</li>
                  <li>Category: Website Design</li>
                </ul>
                <button className="btn btn-primary" data-dismiss="modal" type="button">
                  <i className="fas fa-times"></i>
                  Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  {/* <!-- Modal 6 --> */}
  <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true"></div>
        </div>
    )
}
