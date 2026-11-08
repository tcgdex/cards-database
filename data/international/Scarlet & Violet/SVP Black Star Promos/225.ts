import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu"
	},
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",
	illustrator: "DOM",
	dexId: [25],

	attacks: [
		{
			cost: ["Lightning","Lightning","Colorless"],
			name: {
				'en-us': "Scrappy Spark",
				'fr-fr': "Étincelle Querelleuse"
			},
			effect: {
				'en-us': 	"Flip a coin until you get tails. This attack does 30 more damage for each heads.",
				'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face."
			},
			damage: "30+"
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			stamp: ["worlds-2025"],
			thirdParty: {
				tcgplayer: 648631
			},
		},
		{
			type: "reverse",
			foil: "league",
			stamp: ["winner"],
			thirdParty: {
				tcgplayer: 649940
			},
		},
	]
}

export default card
