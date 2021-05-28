import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Tyranitar V"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Common",
	category: "Pokemon",
	hp: 230,
	types: ["Darkness"],

	attacks: [{
		name: {
			en: "Cragalanche"
		},

		effect: {
			en: "Discard the top 2 cards of your opponent’s deck."
		},

		damage: 60,
		cost: ["Darkness", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Single Strike Crush"
		},

		effect: {
			en: "Discard the top 4 cards of your deck."
		},

		damage: 240,
		cost: ["Darkness", "Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card