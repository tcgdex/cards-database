import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Electrode",
		fr: "Crustabri",
		de: "Austos"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [101],

	hp: 70,

	types: [
		"Lightning"
	],

	evolveFrom: {
		en: "Shellder",
		fr: "Kokiyas"
	},

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Super Dynamo",
			},
			effect: {
				en: "Once during your turn (before your attack), if Electrode is your Active Pokémon, you may flip a coin. If heads, choose a Lightning Energy card from your discard pile and attach it to 1 of your Pokémon. This power can't be used if Electrode is affected by a Special Condition.",
			},
		},
	],,
	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Swift",
				fr: "Léchouille",
				de: "Schlecker"
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 30,

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
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84370,
				cardmarket: 274883
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
