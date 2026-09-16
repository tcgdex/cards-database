import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Nidoran♀"
	},

	illustrator: "Taira Akitsu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [29],
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	description: {
		en: "Females are more sensitive to smells than males. While foraging, they'll use their whiskers to check wind direction and stay downwind of predators."
	},

	attacks: [{
		name: {
			en: "Growl"
		},

		cost: ["Colorless"],

		effect: {
			en: "During your opponent's next turn, attacks used by the Defending Pokémon do 30 less damage (before applying Weakness and Resistance)."
		}
	}, {
		name: {
			en: "Headbutt"
		},

		cost: ["Darkness"],

		damage: 10,
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907694,
				tcgplayer: 716483
			}
		}
	],
}

export default card
