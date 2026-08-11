import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Combee"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'id-id': "Saat malam, sekitar 100 Combee berkumpul dan tidur bersama membentuk gumpalan besar."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Berbagi Rezeki"
		},

		effect: {
			'id-id': "Pulihkan HP 1 Pokémon Cadangan sendiri sejumlah 20."
		},

		cost: ["Grass"]
	}, {
		name: {
			'id-id': "Menyeruduk"
		},

		damage: 20,
		cost: ["Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card