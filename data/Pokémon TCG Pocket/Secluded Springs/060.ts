import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Teddiursa"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "Its paws are soaked in oodles of honey. When\nnervous, Teddiursa will lick its paws and soon\nhave a smile back on its face."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Surprise Attack"
		},

		damage: 40,
		cost: ["Colorless"],

		effect: {
			en: "Flip a coin. If tails, this attack does nothing."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card