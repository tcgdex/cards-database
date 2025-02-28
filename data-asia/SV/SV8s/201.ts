import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Skarmory"
	},

	illustrator: "Takumi Wada",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		id: "Kabarnya bulu Skarmory yang rontok itu tipis dan tajam sehingga adakalanya digunakan sebagai pedang."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Sayap Baja"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 30."
		},

		damage: 50,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card