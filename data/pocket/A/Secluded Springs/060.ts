import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Teddiursa",
		fr: "Teddiursa"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [216],
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "Its paws are soaked in oodles of honey. When\nnervous, Teddiursa will lick its paws and soon\nhave a smile back on its face.",
		fr: "Quand il est anxieux, il lèche ses pattes qui sont constamment couvertes de miel, et retrouve le sourire."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Surprise Attack",
			fr: "Attaque Surprise"
		},

		damage: 40,
		cost: ["Colorless"],

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card