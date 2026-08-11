import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Dragapult ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Dragon"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'id-id': "Jet Head"
		},

		damage: 70,
		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Phantom Dive"
		},

		effect: {
			'id-id': "Letakkan sejumlah 6 Token Kerusakan pada Pokémon Cadangan lawan sesukanya."
		},

		damage: 200,
		cost: ["Fire", "Psychic"]
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card