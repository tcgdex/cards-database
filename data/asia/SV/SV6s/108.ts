import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Glimmet"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'id-id': "Kristal zat racun Glimmet terlihat seperti kelopak bunga. Pokémon ini melindungi diri dengan menyebarkan racun layaknya serbuk bunga."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Rock Shot"
		},

		effect: {
			'id-id': "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		},

		damage: 30,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card