import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Bonsly"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 30,
	types: ["Fighting"],

	description: {
		id: "Bonsly terlihat seperti sedang menangis karena ia mengalirkan air dari matanya untuk mengatur kadar air berlebih dalam tubuhnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Menangis Meraung-raung"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing."
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