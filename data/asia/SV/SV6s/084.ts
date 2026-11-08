import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Farigiraf"
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		'id-id': "Sambil melindungi kepala utamanya menggunakan kepala ekornya yang keras, Farigiraf memutar-mutar lehernya dan menyeruduk."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Midrumble"
		},

		effect: {
			'id-id': "Serangan ini memberikan kerusakan sejumlah 40 untuk tiap Pokémon Stage 1 di Arena sendiri."
		},

		damage: "40×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'id-id': "Telepati Menyeramkan"
		},

		effect: {
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing."
		},

		damage: 80,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card