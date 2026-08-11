import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lanturn ex",
		'fr-fr': "Lanturn-ex"
	},

	illustrator: "Fujimoto Gold",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [171],
	hp: 150,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Chinchou"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Flashing Signal",
			'fr-fr': "Signaux Aveuglants"
		},

		damage: 80,
		cost: ["Lightning", "Colorless", "Colorless"],

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed. If tails, your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé. Si c'est pile, le Pokémon Actif de votre adversaire est maintenant Confus."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lugia"]
}

export default card