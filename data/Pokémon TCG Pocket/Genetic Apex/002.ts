import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Ivysaur",
		fr: "Herbizarre"
	},

	illustrator: "Kurata So",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",
	evolveFrom: {
		en: "Bulbasaur",
		fr: "Bulbizarre"
	},

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Razor Leaf",
			fr: "Tranch'Herbe"
		},

		damage: "60"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond",

	description: {
		en: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
		fr: "Son bulbe dorsal est devenu si gros qu'il ne peut plus se tenir sur ses pattes postérieures."
	}
}

export default card
