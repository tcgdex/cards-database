import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Rellor"
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		id: "Rellor mematangkan energi evolusi sambil menggelindingkan bola lumpur. Pada akhirnya, waktu evolusi Pokémon ini akan tiba."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Gasak Sedikit"
		},

		effect: {
			id: "Pokémon ini juga menerima kerusakan sejumlah 10."
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card