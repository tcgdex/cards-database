import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Magcargo"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		'id-id': "Cangkang di punggung Magcargo mudah mengelupas, terkadang api bersuhu tinggi yang mengalir di dalam tubuhnya tersembur dari cangkang tersebut."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Daerah Lava"
		},

		effect: {
			'id-id': "Selama Pokémon ini ada di Arena, pada giliran lawan, tiap kali Pokémon Bertarung lawan kembali ke Cadangan, ubah kondisi Pokémon Bertarung yang baru menjadi Luka Bakar."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Heat Blast"
		},

		damage: 100,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card