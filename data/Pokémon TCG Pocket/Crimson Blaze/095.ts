import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Sandslash"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		en: "Sandshrew"
	},

	description: {
		en: "It climbs trees by hooking on with its sharp claws.\nSandslash shares the berries it gathers, dropping\nthem down to Sandshrew waiting below the tree."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Cut"
		},

		damage: 50,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card