import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Nidoran♀"
	},

	illustrator: "tayu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [29],
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Find a Friend"
		},

		cost: ["Colorless"],

		effect: {
			en: "Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck."
		}
	}, {
		name: {
			en: "Gnaw"
		},

		cost: ["Darkness"],

		damage: 10
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	description: {
		en: "Females are more sensitive to smells than males. While foraging, they'll use their whiskers to check wind direction and stay downwind of predators."
	},

	variants: [
		{ type: "normal" },
		{ type: "reverse" }
	],
}

export default card
