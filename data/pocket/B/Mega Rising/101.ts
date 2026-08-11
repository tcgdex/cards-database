import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Sableye"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [302],
	hp: 80,
	types: ["Psychic"],

	description: {
		'en-us': "Materials from gems it has eaten float to the\nsurface of its body and can form an infinite\nnumber of patterns among individuals."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Dirty Throw"
		},

		damage: 70,
		cost: ["Psychic", "Psychic"],

		effect: {
			'en-us': "Discard a card from your hand. If you can't, this attack does nothing."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card