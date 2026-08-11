import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Toxtricity ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Fighting"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'id-id': "Knock Hammer"
		},

		effect: {
			'id-id': "Buang 1 kartu dari atas Deck lawan ke Trash."
		},

		damage: 70,
		cost: ["Lightning", "Lightning"]
	}, {
		name: {
			'id-id': "Gaia Punk"
		},

		effect: {
			'id-id': "Pilih 3 Energi {Listrik} yang dikenakan pada Pokémon di Arena sendiri, lalu buang ke Trash."
		},

		damage: 270,
		cost: ["Lightning", "Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card