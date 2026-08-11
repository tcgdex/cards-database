import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Flittle"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],

	description: {
		'id-id': "Flittle hidup dan berlari-lari di tanah gersang. Jika buah beri favoritnya diambil, Pokémon ini akan mengejar dan membalaskan dendamnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Serangan Cepat"
		},

		effect: {
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 20."
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

	retreat: 1,
	regulationMark: "G"
}

export default card