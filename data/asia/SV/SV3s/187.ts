import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Scizor"
	},

	illustrator: "Oku",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],

	description: {
		id: "Dengan capitnya yang mengandung baja, Scizor akan menghancurkan benda sekeras apa pun yang ditangkapnya menjadi debu."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Punish Scissor"
		},

		effect: {
			id: "Kerusakan yang diberikan bertambah sejumlah 50 untuk tiap Pokémon yang memiliki Ability di Arena lawan."
		},

		damage: "10+",
		cost: ["Metal"]
	}, {
		name: {
			id: "Potongan Iai"
		},

		damage: 70,
		cost: ["Metal", "Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card