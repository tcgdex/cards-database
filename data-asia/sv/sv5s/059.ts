import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Girafarig"
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		id: "Terdapat kepala kecil di ekor Girafarig. Bagian ini memiliki insting untuk menggigit musuh yang mendekat dari belakang."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Psychodamage"
		},

		effect: {
			id: "Kerusakan yang diberikan bertambah sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon Bertarung lawan."
		},

		damage: "20+",
		cost: ["Psychic", "Colorless"]
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
	regulationMark: "H"
}

export default card