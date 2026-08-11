import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Tyranitar ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 340,
	types: ["Lightning"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'id-id': "Penghempas Gunung"
		},

		effect: {
			'id-id': "Buang 2 kartu dari atas Deck sendiri ke Trash."
		},

		damage: 120,
		cost: ["Fighting"]
	}, {
		name: {
			'id-id': "Thor Rampage"
		},

		effect: {
			'id-id': "Jika Pokémon Cadangan sendiri memiliki Token Kerusakan, kerusakan yang diberikan bertambah sejumlah 100."
		},

		damage: "150+",
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card