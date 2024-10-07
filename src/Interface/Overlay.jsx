import "./styles.css";

export default function Overlay() {
	return (
		<div className="container">
			<header>
				<div className="brand">
					<a
						href="https://github.com/Byteuth"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="pipa.png" style={{ width: "50px", height: "auto" }} />
						{/* <p>github</p> */}
					</a>
				</div>
				<div>
					<ul className="header-ul">
						<li className="header-li">
							<a
								href="https://francisco-shaul-resume.tiiny.site"
								target="_blank"
								rel="noopener noreferrer"
							>
								Resume
							</a>
						</li>
						<li className="header-li">
							<a
								href="https://github.com/Byteuth"
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub
							</a>
						</li>

						<li className="header-li">
							<a
								href="https://www.linkedin.com/in/%F0%9F%8C%BB-francisco-shaul-1314b6172/"
								target="_blank"
								rel="noopener noreferrer"
							>
								LinkedIn
							</a>
						</li>
						<li className="header-li">
							<a
								href="https://discord.gg/NbeJbFaX"
								target="_blank"
								rel="noopener noreferrer"
							>
								Discord
							</a>
						</li>
					</ul>
				</div>
			</header>

			<div className="main-wrapper">
				<section className="section section-1">
					<div className="wrapper">
						<h3>Francisco Shaul</h3>
						<h2>
							<strong>CREATIVE DEVELOPER</strong>
						</h2>
						<p>
							My main objective is to make <strong>cool</strong> 3D experiences
							for everyone on the internet.
						</p>
					</div>
				</section>

				<section className="section section-2">
					<div className="wrapper">
						<div className="card">
							<h2>
								<strong>Hi!</strong>
							</h2>
							<p>
								Growing up surrounded by computers, video games, and tech, I was
								always driven by curiosity. Often taking gadgets apart just to
								see how they worked (and occasionally breaking a few in the
								process). That hands-on exploration eventually led me to coding,
								which quickly turned into an insanely fun adventure! With a
								sculpting background and a passion for coding, I now build
								immersive user experiences that blend creativity with code.
							</p>
							<p>
								<img
									src="terrainshader.png"
									style={{ width: "455px", height: "200px" }}
								/>
							</p>
						</div>
					</div>
				</section>

				<div className="projects">
					<h2 className="projects">
						other <strong>FUN STUFF </strong>
					</h2>
				</div>
				<section className="section section-3">
					<div className="card-wrapper">
						<div className="card">
							<a
								href="https://github.com/bitbybit-nc/RecipeBox"
								target="_blank"
								rel="noopener noreferrer"
							>
								<h2>RecipeBox</h2>
								<p>
									RecipeBox is a mobile app for easily adding and storing
									recipes from any source, offering a centralized hub for
									searching and navigating them. Developed in two weeks by a
									team of four, the app evolved from concept to a functional MVP
									with extra features like Cloud Vision for Optical Character
									Recognition (OCR).
								</p>
								<p>
									<img
										src="recipebox.png"
										style={{ width: "440px", height: "250px" }}
									/>
								</p>
							</a>
						</div>
						<div className="card">
							<h2>Orbital Quest</h2>
							<p>
								Orbital Quest is a 3D space designed as a testing ground for
								third-person character and camera controllers typical in RPGs.
								It focuses on creating a robust, flexible control system for
								easy integration into other applications, exploring player
								controls and camera orientation across various states in 3D
								environments.
							</p>
							<p>
								<img
									src="orbitalQuest.png"
									style={{ width: "440px", height: "250px" }}
								/>
							</p>
						</div>
						<div className="card">
							<h2>Mini Marble</h2>
							<p>
								A mini platformer where players guide a marble through obstacles
								to reach the finish line. This project served as a creative
								learning platform focused on 3D rendering and physics mechanics
								like collision detection and object movement.
							</p>
							<p>
								<img
									src="marblegame.png"
									style={{ width: "440px", height: "250px" }}
								/>
							</p>
						</div>
						<div className="card">
							<h2>and others!</h2>
							<p>
								for other projects like this cool shader, please check out my
								github!
							</p>

							<br></br>
							<br></br>

							<p>
								<img
									src="seaShader.png"
									style={{ width: "440px", height: "250px" }}
								/>
							</p>
						</div>
					</div>
				</section>
			</div>

			<footer>
				<div className="footer-left">
					<div>
						<ul className="header-ul">
							<li className="header-li">
								<a
									href="https://francisco-shaul-resume.tiiny.site"
									target="_blank"
									rel="noopener noreferrer"
								>
									Resume
								</a>
							</li>
							<li className="header-li">
								<a
									href="https://github.com/Byteuth"
									target="_blank"
									rel="noopener noreferrer"
								>
									GitHub
								</a>
							</li>

							<li className="header-li">
								<a
									href="https://www.linkedin.com/in/%F0%9F%8C%BB-francisco-shaul-1314b6172/"
									target="_blank"
									rel="noopener noreferrer"
								>
									LinkedIn
								</a>
							</li>
							<li className="header-li">
								<a
									href="https://discord.gg/NbeJbFaX"
									target="_blank"
									rel="noopener noreferrer"
								>
									Discord
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="footer-center"></div>
				<p className="copyright">2024 © Byteuth</p>
			</footer>
		</div>
	);
}
