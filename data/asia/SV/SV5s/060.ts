import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Bronzor"
	},

	illustrator: "Kedamahadaitai Yawarakai",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		'id-id': "Orang-orang dahulu percaya bahwa pola di punggung Bronzor mengandung kekuatan misterius."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Mirror Attack"
		},

		effect: {
			'id-id': "Jika Pokémon Bertarung lawan adalah Pokémon {Psychic}, kerusakan yang diberikan bertambah sejumlah 30."
		},

		damage: "10+",
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

	retreat: 3,
	regulationMark: "H"
}

export default card