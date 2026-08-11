import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Special Delivery Pikachu",
		'pt-br': "Special Delivery Pikachu"
	},

	illustrator: "Illus. & Direc. The Pokémon Company Art Team",
	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	attacks: [{
		name: {
			'en-us': "Happy Delivery",
			'pt-br': "Happy Delivery"
		},

		effect: {
			'en-us': "Search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck.",
			'pt-br': "Search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Electro Ball",
			'pt-br': "Electro Ball"
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
		'en-us': "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy."
	},

	stage: "Basic",
	dexId: [25],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 516369
	}
}

export default card
