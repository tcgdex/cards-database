import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Torterra ex"
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 340,
	types: ["Grass"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'id-id': "Barisan Hutan"
		},

		effect: {
			'id-id': "Serangan ini memberikan kerusakan sejumlah 30 untuk tiap Pokémon {Daun} di Arena sendiri."
		},

		damage: "30×",
		cost: ["Grass"]
	}, {
		name: {
			'id-id': "Jungle Hammer"
		},

		effect: {
			'id-id': "Pulihkan HP Pokémon ini sejumlah 50."
		},

		damage: 150,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card