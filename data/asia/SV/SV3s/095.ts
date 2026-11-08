import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Glimmet"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'id-id': "Glimmet menyerap nutrisi dari dinding gua. Kelopak bunga yang terbuat dari kristal beracun menyelimuti tubuh Pokémon ini."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Serpihan Racun"
		},

		effect: {
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Racun."
		},

		damage: 20,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card