import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Charmander"
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		id: "Sejak lahir, api menyala di ekor Charmander. Hidupnya berakhir saat api tersebut padam."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Heat Tackle"
		},

		effect: {
			id: "Pokémon ini juga menerima kerusakan sejumlah 10."
		},

		damage: 30,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card