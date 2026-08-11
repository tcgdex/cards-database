import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Grookey",
		'fr-fr': "Ouistempo",
		'es-es': "Grookey",
		'it-it': "Grookey",
		'pt-br': "Grookey",
		'de-de': "Chimpep"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",
	dexId: [810],

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			'fr-fr': "Tapotige",
			'en-us': "Branch Poke",
			'es-es': "Punzada Rama",
			'it-it': "Ramostoccata",
			'pt-br': "Cutucada com Galho",
			'de-de': "Zweigstoß"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Fire",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 886621,
				tcgplayer: 699876
			}
		},
	],
}

export default card
