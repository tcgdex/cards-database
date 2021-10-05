import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Special Delivery Pikachu",
		pt: "Special Delivery Pikachu"
	},

	illustrator: "Illus. & Direc. The Pokémon Company Art Team",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	attacks: [{
		name: {
			en: "Happy Delivery",
			pt: "Happy Delivery"
		},

		effect: {
			en: "Search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck.",
			pt: "Search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Electro Ball",
			pt: "Electro Ball"
		},

		damage: 30,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,

	description: {
		en: "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy."
	},

	stage: "Basic",
	dexId: [25],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	}
}

export default card