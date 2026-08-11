import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "Spinda",
		'fr-fr': "Spinda",
		'de-de': "Pandir"
	},

	illustrator: "Motofumi Fujiwara",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		327,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Pattern Distraction",
				'fr-fr': "Distra-style",
				'de-de': "Ablenkendes Muster"
			},
			effect: {
				'en-us': "As long as Spinda is your Active Pokémon, whenever your opponent's Basic Pokémon tries to attack, your opponent flips a coin. If tails, that attack does nothing. You can't use more than 1 Pattern Distraction Poké-Body each turn.",
				'fr-fr': "Tant que Spinda est votre Pokémon Actif, lorsque les Pokémon de base de votre adversaire essayent d'attaquer, votre adversaire lance une pièce. Si c'est pile, cette attaque est sans effet. Vous ne pouvez pas utiliser plus d'1 Poké-Body Distra-style par tour.",
				'de-de': "Solange Pandir dein Aktives Pokémon ist, wirf jedes Mal, wenn ein Basis-Pokémon deines Gegners angreifen will, 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen. Du kannst nicht mehr als 1 Ablenkendes Muster Poké-Body pro Zug einsetzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Whimsy Draw",
				'fr-fr': "Pioche bizzarre",
				'de-de': "Launischer Zug"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. For each heads, draw 2 cards.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque face, piochez 2 cartes.",
				'de-de': "Wirf so lange eine Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Ziehe für jedes Mal, wenn die Münze \"Kopf\" gezeigt hat, 2 Karten."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double-edge",
				'fr-fr': "Damoclès",
				'de-de': "Austeiler"
			},
			effect: {
				'en-us': "Flip a coin. If tails, Spinda does 10 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est pile, Spinda s'inflige 10 dégâts.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" fügt sich Pandir selbst 10 Schadenspunkte zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276903,
		tcgplayer: 89460
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
