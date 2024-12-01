import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Lickitung"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Continuous Lick"
		},

		effect: {
			en: "Flip a coin until you get tails. This attack does 60 damage for each heads."
		},

		damage: "60x"
	}],

	retreat: 3,
	rarity: "Two Diamond"
}

export default card
