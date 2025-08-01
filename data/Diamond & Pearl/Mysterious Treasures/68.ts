import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Vigoroth",
		fr: "Vigoroth",
		de: "Muntier"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		288,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Slakoth",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Wake-up Punch",
				fr: "Coup d'poing qui réveille",
				de: "Aufwachhieb"
			},
			effect: {
				en: "If Vigoroth evolved from Slakoth during this turn and Slakoth was Asleep, this attack's base damage is 60 instead of 10.",
				fr: "Si Vigoroth a évolué de Parecool lors de ce tour et que Parecool est Endormi, les dégâts de base de cette attaque sont de 60 au lieu de 10.",
				de: "Wenn Muntier sich in diesem Zug aus Bummelz entwickelt hat, während Bummelz den Speziellen Zustand \"schlafend\" hatte, beträgt der Grundschaden dieses Angriffs 60 Schadenspunkte anstelle von 10 Schadenspunkten."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fury Swipes",
				fr: "Combo-griffe",
				de: "Kratzfurie"
			},
			effect: {
				en: "Flip 3 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	description: {
		fr: "Son cœur bat dix fois plus vite que la normale, c'est pourquoi il ne tient pas en place."
	},

	thirdParty: {
		cardmarket: 277697,
		tcgplayer: 90370
	}
}

export default card
