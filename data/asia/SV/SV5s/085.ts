import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Arbok"
	},

	illustrator: "Minato",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		id: "Pola di perutnya terlihat seperti wajah menakutkan. Musuh yang lemah akan melarikan diri hanya dengan melihat pola tersebut."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Racun Panik"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Racun, Luka Bakar, dan Pusing."
		},

		cost: ["Darkness"]
	}, {
		name: {
			id: "Taring Kegelapan"
		},

		damage: 70,
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card