import React from 'react';

const Contact = () => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="font-weight-bold">Get in Touch</h1>
                        <p className="lead">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            
                                <div className="col-lg-6">
                                    <div className="form-group">
                                    <label for="exampleInputEmail1">Your Name</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                    <label for="exampleInputEmail1">Your Email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    
                                    </div>
                                </div>
                           
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                            <div className="form-group">
                                    <label for="exampleInputEmail1">Message</label>
                                    <textarea className="form-control" name="" id="" cols="30" rows="10"></textarea>
                                    
                                    </div>
                                    <button className="btn btn-primary">Send</button>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
