const FunctionalInterfaces = [
	{name: "BiConsumer", inputs: "T,U", output: "void", method: "accept", primitiveSpecializationTypes: "-"},
	{name: "BiFunction", inputs: "T,U", output: "R", method: "apply", primitiveSpecializationTypes: "-"},
	{name: "BinaryOperator", inputs: "T,T", output: "T", method: "apply", primitiveSpecializationTypes: "-"},
	{name: "BiPredicate", inputs: "T,U", output: "boolean", method: "test", primitiveSpecializationTypes: "-"},
	{name: "BooleanSupplier", inputs: "-", output: "boolean", method: "getAsBoolean", primitiveSpecializationTypes: "boolean"},
	{name: "Consumer", inputs: "T", output: "void", method: "accept", primitiveSpecializationTypes: "-"},
	{name: "DoubleBinaryOperator", inputs: "double,double", output: "double", method: "apply", primitiveSpecializationTypes: "double"},
	{name: "DoubleConsumer", inputs: "double", output: "void", method: "accept", primitiveSpecializationTypes: "double"},
	{name: "DoubleFunction", inputs: "double", output: "R", method: "apply", primitiveSpecializationTypes: "double"},
	{name: "DoublePredicate", inputs: "double", output: "boolean", method: "test", primitiveSpecializationTypes: "double"},
	{name: "DoubleSupplier", inputs: "-", output: "double", method: "getAsDouble", primitiveSpecializationTypes: "double"},
	{name: "DoubleToIntFunction", inputs: "double", output: "int", method: "apply", primitiveSpecializationTypes: "double,int"},
	{name: "DoubleToLongFunction", inputs: "double", output: "long", method: "apply", primitiveSpecializationTypes: "double,long"},
	{name: "DoubleUnaryOperator", inputs: "double", output: "double", method: "apply", primitiveSpecializationTypes: "double"},
	{name: "Function", inputs: "T", output: "R", method: "apply", primitiveSpecializationTypes: "-"},
	{name: "IntBinaryOperator", inputs: "int,int", output: "int", method: "apply", primitiveSpecializationTypes: "int"},
	{name: "IntConsumer", inputs: "int", output: "void", method: "accept", primitiveSpecializationTypes: "int"},
	{name: "IntFunction", inputs: "int", output: "R", method: "apply", primitiveSpecializationTypes: "int"},
	{name: "IntPredicate", inputs: "int", output: "boolean", method: "test", primitiveSpecializationTypes: "int"},
	{name: "IntSupplier", inputs: "-", output: "int", method: "getAsInt", primitiveSpecializationTypes: "int"},
	{name: "IntToDoubleFunction", inputs: "int", output: "double", method: "apply", primitiveSpecializationTypes: "int,double"},
	{name: "IntToLongFunction", inputs: "int", output: "long", method: "apply", primitiveSpecializationTypes: "int,long"},
	{name: "IntUnaryOperator", inputs: "int", output: "int", method: "apply", primitiveSpecializationTypes: "int"},
	{name: "LongBinaryOperator", inputs: "long,long", output: "long", method: "apply", primitiveSpecializationTypes: "long"},
	{name: "LongConsumer", inputs: "long", output: "void", method: "accept", primitiveSpecializationTypes: "long"},
	{name: "LongFunction", inputs: "long", output: "R", method: "apply", primitiveSpecializationTypes: "long"},
	{name: "LongPredicate", inputs: "long", output: "boolean", method: "test", primitiveSpecializationTypes: "long"},
	{name: "LongSupplier", inputs: "-", output: "long", method: "getAsLong", primitiveSpecializationTypes: "long"},
	{name: "LongToDoubleFunction", inputs: "long", output: "double", method: "apply", primitiveSpecializationTypes: "long,double"},
	{name: "LongToIntFunction", inputs: "long", output: "int", method: "apply", primitiveSpecializationTypes: "long,int"},
	{name: "LongUnaryOperator", inputs: "long", output: "long", method: "apply", primitiveSpecializationTypes: "long"},
	{name: "ObjDoubleConsumer", inputs: "T,double", output: "void", method: "accept", primitiveSpecializationTypes: "double"},
	{name: "ObjIntConsumer", inputs: "T,double", output: "void", method: "accept", primitiveSpecializationTypes: "int"},
	{name: "ObjLongConsumer", inputs: "T,long", output: "void", method: "accept", primitiveSpecializationTypes: "long"},
	{name: "Predicate", inputs: "T", output: "boolean", method: "test", primitiveSpecializationTypes: "-"},
	{name: "Supplier", inputs: "-", output: "T", method: "get", primitiveSpecializationTypes: "-"},
	{name: "ToDoubleBiFunction", inputs: "T,U", output: "double", method: "apply", primitiveSpecializationTypes: "double"},
	{name: "ToDoubleFunction", inputs: "T", output: "double", method: "apply", primitiveSpecializationTypes: "double"},
	{name: "ToIntBiFunction", inputs: "T,U", output: "int", method: "apply", primitiveSpecializationTypes: "int"},
	{name: "ToIntFunction", inputs: "T", output: "int", method: "apply", primitiveSpecializationTypes: "int"},
	{name: "ToLongBiFunction", inputs: "T,U", output: "long", method: "apply", primitiveSpecializationTypes: "long"},
	{name: "ToLongFunction", inputs: "T", output: "long", method: "apply", primitiveSpecializationTypes: "long"},
	{name: "UnaryOperator", inputs: "T", output: "T", method: "apply", primitiveSpecializationTypes: "-"}
];

export default FunctionalInterfaces;
