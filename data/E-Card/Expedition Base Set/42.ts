import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Victreebel",
		fr: "Crustabri",
		de: "Austos"
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [71],

	hp: 90,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Shellder",
		fr: "Kokiyas"
	},

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Fragrance Trap",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, choose 1 of your opponent's Benched Pokémon and switch the Defending Pokémon with it. This Power can't be used if Victreebel is affected by a Special Condition.",
			},
		},
	],,
	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Corrosive Acid",
				fr: "Léchouille",
				de: "Schlecker"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Burned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Auto Fire",
				fr: "Tir automatique",
				de: "Dauerfeuer"
			},
			effect: {
				en: "Flip 4 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf 4 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84372,
				cardmarket: 274883
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
