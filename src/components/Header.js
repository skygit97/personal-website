import React from "react";

function Header() {
	return (
		<header>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid px-5">
					<a className="navbar-brand" href="#">
						SKY KUMTONG
					</a>

					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarCollapse"
						aria-controls="navbarCollapse"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div
						className="collapse navbar-collapse justify-content-end"
						id="navbarCollapse"
					>
						<ul className="navbar-nav">
							<li className="nav-item active">
								<a className="nav-link" href="#" aria-current="page">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#about">
									About Me
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#projects">
									Projects
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#contact">
									Contact Me
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;
