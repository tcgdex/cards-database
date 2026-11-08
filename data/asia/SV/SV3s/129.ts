import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Aegislash"
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	description: {
		'id-id': "Aegislash dengan kekuatan spiritualnya yang kuat mengendalikan manusia dan Pokémon untuk membuat negara yang menguntungkan baginya."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Perisai Mistis"
		},

		effect: {
			'id-id': "Pokémon ini tidak menerima kerusakan akibat serangan dari Pokémon {ex}/{V} lawan."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Hard Bash"
		},

		effect: {
			'id-id': "Kerusakan akibat serangan ini tidak terpengaruh oleh efek yang sedang dialami Pokémon Bertarung lawan."
		},

		damage: 120,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card