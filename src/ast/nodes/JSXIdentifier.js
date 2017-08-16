import Node from "../Node.js";

export default class JSXIdentifier extends Node {
	bind() {
		this.declaration = this.scope.findDeclaration(this.name);
		this.declaration.addReference(this);
	}

	gatherPossibleValues(values) {
		values.add(this);
	}

	run() {
		if (this.declaration) this.declaration.activate();
	}
}
