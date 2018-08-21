import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="App">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="first-slide" src="images/mac_edited.jpg" alt="First slide" />
                        <div className="container">
                            <div className="carousel-caption text-left">
                                <h1>Django-Base</h1>
                                <p>A Django web application with the boilerplate code already done for you.</p>
                                <p>
                                    <a className="btn btn-lg btn-outline-success" href="/about/" role="button">About this project</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container marketing">
                <div className="row">
                    <div className="col-lg-4">
                        <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image"
                            width="140" height="140" />
                        <h2>Heading</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula
                            ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        <p>
                            <a className="btn btn-secondary" href="#" role="button">View details &raquo;</a>
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image"
                            width="140" height="140" />
                        <h2>Heading</h2>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis
                            consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
                            nibh.</p>
                        <p>
                            <a className="btn btn-secondary" href="#" role="button">View details &raquo;</a>
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image"
                            width="140" height="140" />
                        <h2>Heading</h2>
                        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis
                            euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
                            justo sit amet risus.</p>
                        <p>
                            <a className="btn btn-secondary" href="#" role="button">View details &raquo;</a>
                        </p>
                    </div>
                </div>
            
                <hr className="featurette-divider" />
            
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">First featurette heading.
                            <span className="text-muted">It'll blow your mind.</span>
                        </h2>
                        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent
                            commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
                    </div>
                </div>
            
                <hr className="featurette-divider" />
            
                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">Oh yeah, it's that good.
                            <span className="text-muted">See for yourself.</span>
                        </h2>
                        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent
                            commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
                        </p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
                    </div>
                </div>
            
                <hr className="featurette-divider" />
            
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">And lastly, this one.
                            <span className="text-muted">Checkmate.</span>
                        </h2>
                        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent
                            commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Home;