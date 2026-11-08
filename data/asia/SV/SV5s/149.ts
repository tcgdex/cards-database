import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Charjabug"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		'id-id': "Charjabug melindungi dirinya dengan cangkang yang kuat. Pokémon ini membalas serangan menggunakan listrik yang dialirkan dari ujung rahangnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Berpijar-pijar"
		},

		damage: 60,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card