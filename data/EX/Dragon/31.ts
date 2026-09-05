import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Grovyle",
		fr: "Massko",
		de: "Reptain"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [253],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Treecko",
		fr: "Arcko",
		de: "Geckarbor"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Fury Cutter",
				fr: "Taillade",
				de: "Zornklinge"
			},
			effect: {
				en: "Flip 4 coins. If all of them are heads, this attack does 10 damage plus 60 more damage. If not, this attack does 10 damage plus 10 more damage for each heads.",
				fr: "Lancez quatre pièces. Si ce sont quatre faces, cette attaque inflige 10 dégâts plus 60 dégâts supplémentaires. Sinon, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires multipliés par le nombre de faces.",
				de: "Wirf 4 Münzen. Bei 4 mal „Kopf“ fügt dieser Angriff 10 Schadenspunkte plus 60 weitere Schadenspunkte zu. Ansonsten fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85937,
				cardmarket: 275908
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85937,
				cardmarket: 275908
			},
		},
	],

}

export default card
