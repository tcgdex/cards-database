import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Remoraid",
		fr: "Rémoraid",
		de: "Remoraid"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [223],

	hp: 60,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Splash",
				fr: "Trempette",
				de: "Platscher"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Trickle",
				fr: "Goutte à goutte",
				de: "Rieseln"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		en: "It forcefully squirts water. The water jet never misses prey even if the REMORAID is deep in the sea.",
		de: "Sein starker Wasserstrahl verfehlt seine Gegner auch dann nicht, wenn das REMORAID unter Wasser ist."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 88698,
				cardmarket: 278511
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278511,
				tcgplayer: 88698
			}
		}
	],

}

export default card
