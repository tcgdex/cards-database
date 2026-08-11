import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Chikorita",
		'fr-fr': "Germignon"
	},

	illustrator: "Naoyo Kimura",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [152],
	hp: 60,
	types: ["Grass"],

	description: {
		'en-us': "A sweet aroma gently wafts from the leaf on its\nhead. It is docile and loves to soak up sun rays.",
		'fr-fr': "Un doux parfum émane de la feuille placée sur sa tête. Il est très gentil et aime dormir au soleil."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Razor Leaf",
			'fr-fr': "Tranch'Herbe"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card