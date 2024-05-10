import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Torracat"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		id: "Saat bertarung, kantong api di pangkal leher Torracat daya apinya meningkat dan menghasilkan bunyi yang seperti lonceng."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Menggigit"
		},

		damage: 30,
		cost: ["Fire"]
	}, {
		name: {
			id: "Flare Strike"
		},

		effect: {
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan Flare Strike."
		},

		damage: 80,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card