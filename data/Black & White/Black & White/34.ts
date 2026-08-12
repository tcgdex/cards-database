import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Simipour",
		fr: "Flotoutan",
		es: "Simipour",
		it: "Simipour",
		pt: "Simipour",
		de: "Sodachita"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		516,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Panpour",
		fr: "Flotajou",
		de: "Sodamak"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Scald",
				fr: "Ébullition",
				de: "Siedewasser"
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé.",
				de: "Das Verteidigende Pokémon ist jetzt verbrannt."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fury Swipes",
				fr: "Combo-Griffe",
				de: "Kratzfurie"
			},
			effect: {
				en: "Flip 3 coins. This attack does 40 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "The high-pressure water expelled from its tail is so powerful, it can destroy a concrete wall.",
		de: "Es schießt mit so hohem Druck Wasser aus seinem Schweif, dass selbst Betonwände den Kürzeren ziehen."
	},

	thirdParty: {
		cardmarket: 279772,
		tcgplayer: 89217
	}
}

export default card
