import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Blitzle"
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		id: "Surai Blitzle bersinar ketika melepaskan listrik. Pokémon ini menggunakan jumlah dan irama dari kilatan-kilatan ini untuk berbincang dengan sesamanya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Tendangan Belakang"
		},

		damage: 10,
		cost: ["Lightning"]
	}, {
		name: {
			id: "Wild Volt"
		},

		effect: {
			id: "Pokémon ini juga menerima kerusakan sejumlah 20."
		},

		damage: 50,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card