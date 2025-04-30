import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Surskit"
	},

	illustrator: "Miki Tanaka",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		en: "They usually live on ponds, but after an evening shower, they may appear on puddles in towns."
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
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card