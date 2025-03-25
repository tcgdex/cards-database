import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Scyther",
		fr: "Insécateur"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Sharp Scythe",
			fr: "Faucille Acérée"
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "It slashes through grass with its sharp scythes, moving too fast for the human eye to track.",
		fr: "Il fauche les herbes avec ses lames acérées. Ses mouvements sont si rapides qu'ils sont imperceptibles à l'oeil nu."
	}
}

export default card
