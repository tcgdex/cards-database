import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Flittle"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],

	description: {
		id: "Flittle hidup dan berlari-lari di tanah gersang. Jika buah beri favoritnya diambil, Pokémon ini akan mengejar dan membalaskan dendamnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Serangan Cepat"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 20."
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