import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [399],
	set: Set,
	illustrator: "Illus. & Direc. The Pokémon Company Art Team",
	category: "Pokemon",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,


	description: {
		'en-us': "It constantly gnaws on logs and rocks to whittle down its front teeth. It nests alongside water."
	},

	stage: "Basic",

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		'en-us': "Special Delivery Bidoof"
	},

	rarity: "Promo",
	hp: 70,
	types: ["Colorless"],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Happy Delivery"
		},

		effect: {
			'en-us': "Search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Rock Smash"
		},

		damage: "30+",

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage."
		}
	}],

	regulationMark: "E",

	thirdParty: {
		cardmarket: 571388
	}
}

export default card
