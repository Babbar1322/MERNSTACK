import React,{useEffect, useState} from 'react';

const Contact = () => {
	const [userData, setUserData] = useState('');
    
    const contactData = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await res.json();
            console.log(data);
            setUserData(data);
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        contactData();
    }, [])
	return (
		<>
			<div className="container-fluid">
				<div className="d-md-flex flex-md-row justify-content-md-around">
					<div className="py-2 px-4 my-3 align-items-center d-flex rounded bg-white shadow">
						<span className="material-symbols-rounded mr-3 text-warning">phone</span>
						+91 9876543210</div>
					<div className="py-2 px-4 my-3 align-items-center d-flex rounded bg-white shadow">
						<span className="material-symbols-rounded mr-3 text-warning">mail</span>
						gursahb@gmail.com</div>
					<div className="py-2 px-4 my-3 align-items-center d-flex rounded bg-white shadow">
						<span className="material-symbols-rounded mr-3 text-warning">pin_drop</span>
						Nai Abadi, Abohar<br />152116</div>
				</div>

				<div className="container rounded shadow-lg p-4 my-3">
					<h3 className="text-center">Get In Touch</h3>

					<form>
						<div className="row">
							<div className="col-md-4 my-3">
								<input type="text" className="form-control" name="name" value={userData.name} placeholder="Name" />
							</div>
							<div className="col-md-4 my-3">
								<input type="email" className="form-control" name='email' value={userData.email} placeholder="Email" />
							</div>
							<div className="col-md-4 my-3">
								<input type="text" className="form-control" name='phone' value={userData._id} placeholder="Phone" />
							</div>
						</div>
						<div className="form-group">
							<textarea className="form-control my-3" name='message' placeholder='Message' rows="3"></textarea>
						</div>

						<button type="submit" className="btn btn-warning btn-block my-3 shadow-lg">Send Message</button>
					</form>
				</div>
			</div>
		</>
	)
}

export default Contact;