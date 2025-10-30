import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Grimmsnarl"
	},

	illustrator: "DOM",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 160,
	types: ["Darkness"],

	evolveFrom: {
		en: "Morgrem"
	},

	description: {
		en: "It lives deep within the forest. Even after evolving\ninto this splendid form, it hasn't given up on its\npetty misdeeds and pranks."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Wrack Down"
		},

		damage: 100,
		cost: ["Darkness", "Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3
}

export default card