import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header role="banner" class="flex-header">
			<nav role="navigation">
				<div class="top-nav" id="navbar-top">
					<div class="about-language">
						<div>
							<strong>Review of java.util.function</strong>
						</div>
					</div>
					<ul id="navbar-top-firstrow" class="nav-list" title="Navigation">
						<li class="nav-bar-cell1-rev" id="nav-list-li-main"><Link to="/">Main</Link></li>
						<li id="nav-list-li-about"><Link to="/about">About</Link></li>
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
