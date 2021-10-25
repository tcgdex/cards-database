import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Special Delivery Pikachu"
	},

	illustrator: "The Pokémon Company Art Team",
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
			en: "Happy Delivery"
		},

		effect: {
			en: "Search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Electro Ball"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card