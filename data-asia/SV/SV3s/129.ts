import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Aegislash"
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	description: {
		id: "Aegislash dengan kekuatan spiritualnya yang kuat mengendalikan manusia dan Pokémon untuk membuat negara yang menguntungkan baginya."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			id: "Perisai Mistis"
		},

		effect: {
			id: "Pokémon ini tidak menerima kerusakan akibat serangan dari Pokémon {ex}/{V} lawan."
		}
	}],

	attacks: [{
		name: {
			id: "Hard Bash"
		},

		effect: {
			id: "Kerusakan akibat serangan ini tidak terpengaruh oleh efek yang sedang dialami Pokémon Bertarung lawan."
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