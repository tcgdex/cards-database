import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Sunkern",
		fr: "Tournegrin"
	},

	illustrator: "Toshinao Aoki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		en: "It suddenly falls out of the sky in the morning.\nKnowing it's weak, it simply feeds until it evolves.",
		fr: "Ce Pokémon tombe soudainement du ciel le matin. Conscient de sa faible constitution, il ne fait que se nourrir jusqu'à ce qu'il évolue."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Tackle",
			fr: "Charge"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card