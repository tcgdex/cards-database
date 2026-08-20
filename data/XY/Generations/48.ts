import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Hitmonchan",
		fr: "Tygnon",
		de: "Nockchan"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		107,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bullet Punch",
				fr: "Pisto-Poing",
				de: "Patronenhieb"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 20 weitere Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mach Cross",
				fr: "Passage Éclair",
				de: "Tempo-Cross"
			},

			damage: 60,

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
		en: "The arm-twisting punches it throws pulverize even concrete. It rests after three minutes of fighting.",
		de: "Die Schläge, die es austeilt, können Beton pulverisieren. Es muss sich im Kampf alle drei Minuten ausruhen."
	},

	thirdParty: {
		cardmarket: 288486,
		tcgplayer: 113706
	}
}

export default card
