import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Kingambit"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],

	description: {
		'id-id': "Hanya Bisharp yang berada pada posisi teratas di dalam pasukannya yang dapat berevolusi menjadi Kingambit."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'id-id': "Membabat"
		},

		effect: {
			'id-id': "Jika Pokémon Bertarung lawan memiliki Token Kerusakan sejumlah 4 atau lebih, Pokémon tersebut KO."
		},

		cost: ["Metal"]
	}, {
		name: {
			'id-id': "Cabikan Besar"
		},

		damage: 140,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card