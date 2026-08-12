import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Simisear",
		fr: "Flamoutan",
		es: "Simisear",
		it: "Simisear",
		pt: "Simisear",
		de: "Grillchita"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		514,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Pansear",
		fr: "Flamajou",
		de: "Grillmak"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Flame Burst",
				fr: "Rebondifeu",
				de: "Funkenflug"
			},
			effect: {
				en: "Does 20 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt 2 Pokémon auf der Bank deines Gegners je 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It loves sweets because they become energy for the fire burning inside its body.",
		de: "Am liebsten isst es Süßigkeiten. Es wandelt sie in Energie um, mit der es das Feuer in seinem Körper schürt."
	},

	thirdParty: {
		cardmarket: 279760,
		tcgplayer: 89225
	}
}

export default card
