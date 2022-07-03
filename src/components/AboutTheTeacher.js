import {Container} from 'react-bootstrap';


function AboutTheTeacher () {
    return (
        <div id='about' className="text-center">
           
            <h1 className="display-4 text-center" >About Taal Genio</h1>
            <p className="lead text-black">Taal genio is an online school that focusses on teaching Dutch. We offer high qualitiy classes for students that are eager to learn the language. </p>
            <Container>
            <section id="section-trailer" className="mt-5">
				<div className="ratio ratio-16x9">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/qHGmV0pSbUc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</div>
			</section>
            </Container>
        </div>
    )
}

export default AboutTheTeacher;