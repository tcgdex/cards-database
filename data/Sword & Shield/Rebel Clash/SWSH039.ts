import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "None",
	category: "Pokemon",
	dexId: [25],
	hp: 60,
	types: ["Lightning"],

	description: {
		en: "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Tail Whip"
		},

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, the Defending Pokémon can't attack."
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Pika Bolt"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card