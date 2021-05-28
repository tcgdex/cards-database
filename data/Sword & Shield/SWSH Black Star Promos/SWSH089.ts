import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Octillery"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		en: "Remoraid"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Rapid Strike Search"
		},

		effect: {
			en: "Once during your turn, you may search your deck for a Rapid Strike card, reveal it, and put it into your hand. Then, shuffle your deck. You can’t use more than 1 Rapid Strike Search Ability each turn."
		}
	}],

	attacks: [{
		name: {
			en: "Waterfall"
		},

		damage: 50,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card