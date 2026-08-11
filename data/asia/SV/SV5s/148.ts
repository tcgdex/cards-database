import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Snom"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		id: "Makanannya adalah salju yang menumpuk di tanah. Snom menyukai salju segar yang empuk dan terus memakan salju hingga mencapai puncak gunung."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Bubuk Salju"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur."
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card