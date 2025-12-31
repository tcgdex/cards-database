import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Sableye"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		en: "Materials from gems it has eaten float to the\nsurface of its body and can form an infinite\nnumber of patterns among individuals."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Dirty Throw"
		},

		damage: 70,
		cost: ["Psychic", "Psychic"],

		effect: {
			en: "Discard a card from your hand. If you can't, this attack does nothing."
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