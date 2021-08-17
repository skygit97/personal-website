import React from "react";
import "./Header.scss";

function Header() {
	return (
		<header>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid px-5">
					<a className="navbar-brand" href="#">
						SKY KUMTONG
					</a>

					<a
						href="#off-canvas"
						className="navbar-toggle collapsed"
						data-toggle="collapse"
						data-offcanvas-trigger="off-canvas"
						aria-expanded="false"
					></a>

					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarCollapse"
						aria-controls="navbarCollapse"
						aria-expanded="false"
						aria-label="Toggle navigation"
						data-offcanvas-trigger="off-canvas"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarCollapse">
						<ul className="navbar-nav">
							<li className="nav-item active">
								<a className="nav-link" href="#" aria-current="page">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									About Me
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Projects
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-truncate" href="#">
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
