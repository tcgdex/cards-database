import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Special Delivery Pikachu"
	},

	illustrator: "Illus. & Direc. The Pokémon Company Art Team",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	attacks: [{
		name: {
			en: "Happy Delivery"
		},

		effect: {
			en: "Search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Electro Ball"
		},

		damage: 30,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card