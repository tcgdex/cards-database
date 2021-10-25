import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Tyranitar V"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "None",
	category: "Pokemon",
	dexId: [248],
	hp: 230,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Cragalanche"
		},

		effect: {
			en: "Discard the top 2 cards of your opponent's deck."
		},

		damage: 60
	}, {
		cost: ["Darkness", "Darkness", "Colorless", "Colorless"],

		name: {
			en: "Single Strike Crush"
		},

		effect: {
			en: "Discard the top 4 cards of your deck."
		},

		damage: 240
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card