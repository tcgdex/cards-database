import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Appletun"
	},

	illustrator: "Akira Komayama",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Applin"
	},

	description: {
		en: "It feeds mainly on sweet apples. It will also eat\nsmall bug Pokémon that are attracted by its\nsweet nectar."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Sweets Relay"
		},

		damage: 40,
		cost: ["Grass"],

		effect: {
			en: "If 1 of your Pokémon used Sweets Relay during your last turn, this attack does 30 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card