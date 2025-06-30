import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Zapdos ex"
	},

	illustrator: "PLANETA Saito",
	rarity: "Two Shiny",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Peck"
		},

		damage: 20,
		cost: ["Lightning"]
	}, {
		name: {
			en: "Thundering Hurricane"
		},

		damage: 50,
		cost: ["Lightning", "Lightning", "Lightning"],

		effect: {
			en: "Flip 4 coins. This attack does 50 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card