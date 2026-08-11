import { Card } from '../../../interfaces'
import Set from '../POP Series 1'

const card: Card = {
	name: {
		en: "Blaziken",
		fr: "Brasegali",
		de: "Lohgock"
	},

	illustrator: "Katsura Tabata",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [257],

	hp: 110,

	types: [
		"Fire"
	],

	evolveFrom: {
		en: "Combusken",
		fr: "Galifeu",
		de: "Jungglut"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Punch",
				fr: "Poing de feu",
				de: "Feuerschlag"
			},

			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Kick",
				fr: "Double pied",
				de: "Doppelkick"
			},
			effect: {
				en: "Flip 2 coins. This attack does 50 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de faces.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Water"
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83905,
				cardmarket: 277415
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83905,
				cardmarket: 277415
			},
		},
	],

}

export default card
