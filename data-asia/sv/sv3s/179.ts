import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Bellibolt"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	description: {
		id: "Dengan memanjangkan dan memendekkan tubuhnya yang bergelambir, pusar dinamo Bellibolt menghasilkan energi listrik yang besar."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			id: "Isolator"
		},

		effect: {
			id: "Pokémon ini tidak menerima kerusakan akibat serangan dari Pokémon {Listrik} lawan."
		}
	}],

	attacks: [{
		name: {
			id: "Thunder Edge"
		},

		effect: {
			id: "Kerusakan akibat serangan ini tidak terpengaruh oleh efek yang sedang dialami Pokémon Bertarung lawan."
		},

		damage: 100,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card