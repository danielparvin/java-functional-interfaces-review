const About = () => {
	return (
		<div class="main" id="about">
			<div id="description-general">
				<h1 class="title">Why this project?</h1>
				<div class="description">When I first learned Java's standard functional interfaces in 2016 or 2017, the large number of interfaces overwhelmed me. I started learning how to use the standard functional interfaces by example. But when I read <a href="https://www.amazon.com/Effective-Java-Joshua-Bloch/dp/0134685997">Effective Java, Third Edition</a> by Joshua Bloch in 2018, the author helped me to categorize the interfaces so that I quickly gained a much better understanding of their use.<br/>
				Looking back, I wish that I had seen (or made) a filterable, sortable table to visualize the standard functional interfaces at that time. Joshua Bloch's explanation of the interfaces is super helpful and is much easier to digest than the alphabetical listing of interfaces in <a href="https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/function/package-summary.html">Oracle's API Specification</a>. But visualizing the interfaces with their differences and similarities would have helped me to solidify my understanding.<br/>
				I looked around for such a table recently and couldn't find one. So, I decided to make this project. I had fun reviewing these interfaces in the process. I hope that it's useful to you.</div>
			</div>
			<div id="description-basic-interfaces">
				<h1 class="title">Basic interfaces</h1>
				<div class="description">There are five basic interfaces that take and/or return an <code>Object</code> instance. (Bloch includes the <code>BinaryOperator</code> as a sixth basic interface.) They are <code>Consumer</code>, <code>Function</code>, <code>Predicate</code>, <code>Supplier</code>, and <code>UnaryOperator</code>. Think of all the other standard functional interfaces as variations of these five basic interfaces. It's also helpful to think of an Operator as a specialization of a <code>Function</code> that returns the same type of <code>Object</code> that it takes.</div>
			</div>
			<div id="description-binary-interfaces">
				<h1 class="title">Binary (two-input) interfaces</h1>
				<div class="description">There are four basic interfaces that take in two <code>Object</code> inputs. They are <code>BiConsumer</code>, <code>BiFunction</code>, <code>BinaryOperator</code>, and <code>BiPredicate</code>. Note that both inputs of the <code>BinaryOperator</code> interface must be of the same type.</div>
			</div>
			<div id="description-primitive-interfaces">
				<h1 class="title">Interfaces specialized for primitive types</h1>
				<div class="description">The majority of the standard functional interfaces fall into this category. These are interfaces designed to handle the primitive types <code>int</code>, <code>long</code>, and <code>double</code>. (The <code>BooleanSupplier</code> may also fit best into this category.) It's important to use these interfaces to avoid severe performance drawbacks of auto-boxing and auto-unboxing many values.</div>
			</div>
		</div>
	)
}

export default About;
