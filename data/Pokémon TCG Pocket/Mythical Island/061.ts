import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Eevee"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Continuous Steps"
		},

		damage: 20,
		cost: ["Colorless"],

		effect: {
			en: "Flip a coin until you get tails. This attack does 20 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
