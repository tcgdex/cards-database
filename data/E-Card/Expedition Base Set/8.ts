import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Cloyster",
		fr: "Crustabri",
		de: "Austos"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [91],

	hp: 80,

	types: [
		"Water"
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
				en: "Lick",
				fr: "Léchouille",
				de: "Schlecker"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

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
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "x2"
		},
	],
	retreat: 2,


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
			thirdParty: {
				tcgplayer: 84370,
				cardmarket: 274883
			},
		},
	],
}

export default card
