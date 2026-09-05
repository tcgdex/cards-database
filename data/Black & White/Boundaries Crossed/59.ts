import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Spoink",
		fr: "Spoink",
		es: "Spoink",
		it: "Spoink",
		pt: "Spoink",
		de: "Spoink"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		325,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Flail Around",
				fr: "Fléau Bougeant",
				de: "Rumrudern"
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Using its tail like a spring, it keeps its heart beating by bouncing constantly. If it stops, it dies.",
		de: "Es nutzt seinen Schweif als Sprungfeder, um sein Herz am Pumpen zu halten. Hört es auf zu springen, stirbt es."
	},

	thirdParty: {
		cardmarket: 280646,
		tcgplayer: 89479
	}
}

export default card
