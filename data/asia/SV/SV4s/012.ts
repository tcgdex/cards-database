import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Orbeetle"
	},

	illustrator: "Oku",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		id: "Orbeetle memeriksa daerah sekitarnya menggunakan kekuatan psikokinesis. Lingkup pengamatannya mencapai 10 km dari dirinya."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			id: "Satellite Beam"
		},

		effect: {
			id: "Serangan ini memberikan kerusakan sejumlah 30 untuk tiap lembar Energi yang ada di Trash lawan."
		},

		damage: "30×",
		cost: ["Grass"]
	}, {
		name: {
			id: "Brain Shake"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing."
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