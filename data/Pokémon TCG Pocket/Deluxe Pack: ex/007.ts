import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Weedle"
	},

	illustrator: "Akira Komayama",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		en: "Often found in forests and grasslands.\nIt has a sharp, toxic barb of around two inches\non top of its head."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Multiply"
		},

		cost: ["Grass"],

		effect: {
			en: "Put 1 random Weedle from your deck onto your Bench."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card