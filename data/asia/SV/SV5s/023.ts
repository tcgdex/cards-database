import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Rabsca"
	},

	illustrator: "mingo",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'id-id': "Bayi tertidur di dalam bola Rabsca. Pokémon ini menggelundungkan bola dengan kakinya dan menenangkan bayi tersebut agar dapat tidur nyenyak."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Sphere Shield"
		},

		effect: {
			'id-id': "Selama Pokémon ini ada di Arena, semua Pokémon Cadangan sendiri tidak menerima kerusakan dan efek akibat serangan dari Pokémon lawan."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Psikis"
		},

		effect: {
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap Energi yang dikenakan pada Pokémon Bertarung lawan."
		},

		damage: "10+",
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card