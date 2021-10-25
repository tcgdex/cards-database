import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Lugia"
	},

	illustrator: "kodama",
	rarity: "None",
	category: "Pokemon",
	dexId: [249],
	hp: 130,
	types: ["Colorless"],

	description: {
		en: "It is said to be the guardian of the seas. It is rumored to have been seen on the night of a storm."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Gust"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Wind Pressure"
		},

		effect: {
			en: "If your opponent has 5 or fewer cards in their hand, this attack does nothing."
		},

		damage: 250
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2
}

export default card