import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Orbeetle"
	},

	illustrator: "Oku",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		'id-id': "Orbeetle memeriksa daerah sekitarnya menggunakan kekuatan psikokinesis. Lingkup pengamatannya mencapai 10 km dari dirinya."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'id-id': "Satellite Beam"
		},

		effect: {
			'id-id': "Serangan ini memberikan kerusakan sejumlah 30 untuk tiap lembar Energi yang ada di Trash lawan."
		},

		damage: "30×",
		cost: ["Grass"]
	}, {
		name: {
			'id-id': "Brain Shake"
		},

		effect: {
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing."
		},

		damage: 100,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card