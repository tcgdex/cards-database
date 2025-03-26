import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Weedle"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		en: "Often found in forests and grasslands. It has a sharp, toxic barb of around two inches on top of its head."
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

	retreat: 1,
	rarity: "One Shiny"
}

export default card