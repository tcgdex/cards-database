import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Eevee"
	},

	illustrator: "Shibuzoh.",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Quick Attack"
		},

		damage: 10,
		cost: ["Colorless"],

		effect: {
			en: "Flip a coin. If heads, this attack does 20 more damage."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card
