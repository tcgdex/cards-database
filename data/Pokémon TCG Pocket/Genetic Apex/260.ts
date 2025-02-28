import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Zapdos ex"
	},

	illustrator: "PLANETA Saito",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Raging Thunder"
		},

		effect: {
			en: "This attack also does 30 damage to 1 of your Benched Pokémon."
		},

		damage: "100"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Star"
}

export default card
