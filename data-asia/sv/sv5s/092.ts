import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Farigiraf ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Darkness"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			id: "Zirah Ekor"
		},

		effect: {
			id: "Pokémon ini tidak menerima kerusakan akibat serangan dari Pokémon {ex} yang merupakan Pokémon Basic lawan."
		}
	}],

	attacks: [{
		name: {
			id: "Dirty Beam"
		},

		effect: {
			id: "Serangan ini juga memberikan kerusakan sejumlah 30 kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		damage: 160,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card