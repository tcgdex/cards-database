import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Simipour",
		fr: "Flotoutan"
	},

	illustrator: "Shigenori Negishi",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [516],
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		en: "Panpour",
		fr: "Flotajou"
	},

	description: {
		en: "It prefers places with clean water. When its tuft runs\nlow, it replenishes it by siphoning up water with\nits tail."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Fury Swipes",
			fr: "Combo-Griffe"
		},

		damage: 40,
		cost: ["Water", "Colorless"],

		effect: {
			en: "Flip 3 coins. This attack does 40 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 40 dégâts pour chaque côté face."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card