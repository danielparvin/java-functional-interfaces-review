import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header role="banner" class="flex-header">
			<nav role="navigation">
				<div class="top-nav" id="navbar-top">
					<div class="skip-nav"> // TODO Determine what this is and whether it's necessary.
						<a href="#skip-navbar-top" title="Skip navigation links">Skip navigation links</a>
					</div>
					<div class="about-language">
						<div>
							<strong>Review of java.util.function</strong>
						</div>
					</div>
					<ul id="navbar-top-firstrow" class="nav-list" title="Navigation">
						<li class="nav-bar-cell1-rev">Overview</li>
						<li><a href="about.html">About</a></li> {/* TODO Implement useful links here.*/}
					</ul>
				</div>
				<div class="sub-nav">
				<a id="skip.navbar.top"></a>
				</div>
			</nav>
		</header>
	)
}
export default Header;
