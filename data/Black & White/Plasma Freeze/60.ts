import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Primeape",
		fr: "Colossinge",
		es: "Primeape",
		it: "Primeape",
		pt: "Primeape",
		de: "Rasaff"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		57,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Mankey",
		fr: "Férosinge",
		de: "Menki"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fury Swipes",
				fr: "Combo-Griffe",
				de: "Kratzfurie"
			},
			effect: {
				en: "Flip 3 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Karate Chop",
				fr: "Poing-Karaté",
				de: "Karateschlag"
			},
			effect: {
				en: "Does 80 damage minus 10 damage for each damage counter on this Pokémon.",
				fr: "Inflige 80 dégâts moins 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
				de: "Dieser Angriff fügt 80 Schadenspunkte minus 10 Schadenspunkte für jede Schadensmarke auf diesem Pokémon zu."
			},
			damage: 80,

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
		en: "It grows angry if you see its eyes and gets angrier if you run. If you beat it, it gets even madder.",
		de: "Siehst du ihm in die Augen, wird es wütend. Rennst du weg, wird es noch wütender. Ärgerst du es..."
	},

	thirdParty: {
		cardmarket: 280938,
		tcgplayer: 88366
	}
}

export default card
