import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Charmeleon"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		id: "Ketika pertarungan membuat semangat Charmeleon bergejolak, Pokémon ini meniupkan api berpijar dan membakar daerah sekelilingnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Heat Tackle"
		},

		effect: {
			id: "Pokémon ini juga menerima kerusakan sejumlah 20."
		},

		damage: 70,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card