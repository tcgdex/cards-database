import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Bellibolt"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	description: {
		'id-id': "Dengan memanjangkan dan memendekkan tubuhnya yang bergelambir, pusar dinamo Bellibolt menghasilkan energi listrik yang besar."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Isolator"
		},

		effect: {
			'id-id': "Pokémon ini tidak menerima kerusakan akibat serangan dari Pokémon {Listrik} lawan."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Thunder Edge"
		},

		effect: {
			'id-id': "Kerusakan akibat serangan ini tidak terpengaruh oleh efek yang sedang dialami Pokémon Bertarung lawan."
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