import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Bulbasaur",
	},

	illustrator: "Julie Hang",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",
	dexId: [1],

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Shake and Gather",
		},

		effect: {
			'en-us': "Flip a coin until you get tails. For each head, draw a card.",
		},

	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,

	description: {
		'en-us': "There is a aplant seed on its back right from the day this Pokémon is born. THe seed slowly grows larger.",
	},

	variants: [
		{
			type: "normal",
			stamp: ["illustration-contest-2022"],
			thirdParty: {
				tcgplayer: 485843
			},
		},
	],

	regulationMark: "F"
}

export default card
