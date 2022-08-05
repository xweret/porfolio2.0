import './qualifications.css';

const Qualifications = () => {
    return (
        <div id='qualifications' className="container qualifications-container">
            <span className='quali-text' > My Qualifications </span>
            <div className='qualifications-container'> 
                    <div className="qualification">
                        <div className="content html"></div>
                        <h1>html</h1>
                    </div>
                    <div className="qualification">
                        <div className="content css"></div>
                        <h1>html</h1>
                    </div>
                    <div className="qualification">
                        <div className="content boostrap"></div>
                        <h1>boostrap</h1>
                    </div>
                    <div className="qualification">
                        <div className="content react"></div>
                        <h1>react</h1>
                    </div>
                    {/* <div className="qualification">
                        <div className="Espacio para mas conocomiento en el futuro..."></div>
                        <h1>html</h1>
                    </div> */}
            </div>
        </div>
    );
};

export default Qualifications;