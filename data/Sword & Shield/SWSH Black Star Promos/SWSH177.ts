import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "The Pokémon Company Art Team",
	category: "Pokemon",

	description: {
		en: "It constantly gnaws on logs and rocks to whittle down its front teeth. It nests alongside water."
	},

	stage: "Basic",

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Special Delivery Bidoof"
	},

	rarity: "None",
	hp: 70,
	types: ["Colorless"],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Happy Delivery"
		},

		effect: {
			en: "Search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Rock Smash"
		},

		damage: "30+",

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage."
		}
	}],

	regulationMark: "E"
}

export default card