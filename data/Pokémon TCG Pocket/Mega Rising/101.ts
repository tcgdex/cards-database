import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Sableye",
		fr: "Ténéfix"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [302],
	hp: 80,
	types: ["Psychic"],

	description: {
		en: "Materials from gems it has eaten float to the\nsurface of its body and can form an infinite\nnumber of patterns among individuals.",
		fr: "Les éléments présents dans les gemmes qu'il mange remontent à la surface de son corps, formant des motifs d'une infinie variété."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Dirty Throw",
			fr: "Vilain Lancer"
		},

		damage: 70,
		cost: ["Psychic", "Psychic"],

		effect: {
			en: "Discard a card from your hand. If you can't, this attack does nothing.",
			fr: "Défaussez une carte de votre main. Si vous ne pouvez pas en défausser, cette attaque ne fait rien."
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