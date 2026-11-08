import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Oddish"
	},

	illustrator: "Miranda Branley",
	rarity: "Promo",
	category: "Pokemon",
	dexId: [43],
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Razor Leaf"
		},

		damage: 10
	}, {
		cost: ["Grass", "Grass"],

		name: {
			'en-us': "Grass Knot"
		},

		effect: {
			'en-us': "This attack does 20 damage for each {C} in your opponent's Active Pokémon's Retreat Cost.",
		},

		damage: "20×"
	}],

	weaknesses: [{
		type: "Fire",
		value: "x2"
	}],

	retreat: 1,
	regulationMark: "G",
	description: {
		'en-us': "During the day, it stays in the cold underground to avoid the sun. It grows by bathing in moonlight.",
	},
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 740398,
				tcgplayer: 525293
			},
		}
	],
}

export default card
