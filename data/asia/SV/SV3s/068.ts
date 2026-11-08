import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Baltoy"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'id-id': "Ditemukan di reruntuhan peninggalan kuno. Baltoy bergerak sambil berputar. Pada malam hari saat tidur pun, Pokémon ini berdiri dengan satu kaki."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Putaran Cepat"
		},

		effect: {
			'id-id': "Tukar Pokémon ini dengan Pokémon Cadangan. Setelah itu, lawan menukar Pokémon Bertarungnya dengan Pokémon Cadangan."
		},

		damage: 10,
		cost: ["Psychic"]
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
	regulationMark: "G"
}

export default card