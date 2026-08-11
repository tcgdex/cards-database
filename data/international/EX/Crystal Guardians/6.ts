import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Ludicolo δ",
		'fr-fr': "Ludicolo δ",
		'de-de': "Kappalores"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		272,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Lombre",
		'fr-fr': "Lombre"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Overzealous",
				'fr-fr': "Excès de zèle",
				'de-de': "Übereifrig"
			},
			effect: {
				'en-us': "If your opponent has any Pokémon-ex in play, each of Ludicolo's attacks does 30 more damage to the Defending Pokémon.",
				'fr-fr': "Si votre adversaire possède des Pokémon-ex en jeu, chacune des attaques de Ludicolo inflige 30 dégâts supplémentaires au Pokémon Défenseur.",
				'de-de': "Wenn dein Gegner mindestens 1 Pokémon-ex im Spiel hat, fügt jeder Angriff von Kappalores dem Verteidigenden Pokémon 30 zusätzliche Schadenspunkte zu."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Knock Off",
				'fr-fr': "Sabotage",
				'de-de': "Abschlag"
			},
			effect: {
				'en-us': "Choose 1 card from your opponent's hand without looking and discard it.",
				'fr-fr': "Choisissez sans regarder 1 carte de la main de votre adversaire et défaussez-la.",
				'de-de': "Wähle 1 Karte von der Hand deines Gegners (ohne sie vorher anzusehen). Dein Gegner legt diese Karte auf seinen Ablagestapel."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fire Punch",
				'fr-fr': "Poing de feu",
				'de-de': "Feuerschlag"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 2,

	thirdParty: {
		cardmarket: 277087
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
