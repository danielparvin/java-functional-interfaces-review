import { Link } from "react-router-dom"

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
						<li><a href="overview-tree.html">Tree</a></li> {/* TODO Implement useful links here.*/}
						<li><a href="preview-list.html">Preview</a></li>
						<li><a href="new-list.html">New</a></li>
						<li><a href="deprecated-list.html">Deprecated</a></li>
						<li><a href="index-files/index-1.html">Index</a></li>
						<li><a href="help-doc.html#overview">Help</a></li>
					</ul>
				</div>
				<div class="sub-nav">
				</div>
				<span class="skip-nav" id="skip-navbar-top"></span> {/* TODO Determine what this is and whether it's necessary.*/}
			</nav>
		</header>
	)
}
export default Header;
