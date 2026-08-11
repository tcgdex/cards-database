import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Bonsly"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 30,
	types: ["Fighting"],

	description: {
		'id-id': "Bonsly terlihat seperti sedang menangis karena ia mengalirkan air dari matanya untuk mengatur kadar air berlebih dalam tubuhnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Menangis Meraung-raung"
		},

		effect: {
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing."
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card