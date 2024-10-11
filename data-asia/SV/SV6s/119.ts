import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Skarmory"
	},

	illustrator: "toi8",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		id: "Bulu rontok Skarmory dapat dibuat menjadi pedang sehingga Pokémon ini populer sebagai desain lambang kebesaran."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Cutter Wind"
		},

		damage: 30,
		cost: ["Metal"]
	}, {
		name: {
			id: "Badai Besar"
		},

		effect: {
			id: "Buang Stadium yang ada di Arena ke Trash."
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card