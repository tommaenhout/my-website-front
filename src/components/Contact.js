


function Contact () {
    return(
	<section id="contact">
		<div className="text-center">
		
		<h1 className="display-4 text-center">Contact</h1>
	

    <div className="align-items-center text-center bg-light container">

    <br></br>
			<form className="mb-4">
				<div className="row">
					<div className="col-12 col-md-6">
						<div className="mb-3">
							<label htmlFor="name" className="form-label"><p className="lead text-black">Name</p></label>
							<input id="name" type="text" className="form-control" placeholder="Enter your name"/>
						</div>
						<div className="mb-3">
							<label htmlFor="email" className="form-label"><p className="lead text-black">Email</p></label>
							<input id="email" type="email" className="form-control" placeholder="Enter your email"/>
						</div>
					</div>
					<div className="col-12 col-md-6">
						<div className="mb-3">
							<label htmlFor="message" className="form-label"><p className="lead text-black">Message</p></label>
							<textarea id="message" className="form-control" rows="4" placeholder="Enter your message"></textarea>
						</div>
					</div>
				</div>
				<button type="submit" className="btn btn-lg btn-secundary lead text-white"><span className="lead text-white">Send Message</span></button>
			</form>
    </div>
	</div>
	</section>
    )
}

export default Contact;