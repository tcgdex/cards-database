import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Scyther",
		fr: "Insécateur"
	},

	illustrator: "Narumi Sato",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		en: "It slashes through grass with its sharp\nscythes, moving too fast for the human\neye to track.",
		fr: "Il fauche les herbes avec ses lames acérées. Ses mouvements sont si rapides qu'ils sont imperceptibles à l'œil nu."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Slash",
			fr: "Tranche"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card