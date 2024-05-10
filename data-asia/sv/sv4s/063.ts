import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Flittle"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		id: "Flittle hidup dan berlari-lari di tanah gersang. Jika buah beri favoritnya diambil, Pokémon ini akan mengejar dan membalaskan dendamnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Psikis"
		},

		effect: {
			id: "Kerusakan yang diberikan bertambah sejumlah 10 untuk tiap Energi yang dikenakan pada Pokémon Bertarung lawan."
		},

		damage: "10+",
		cost: ["Psychic", "Psychic"]
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