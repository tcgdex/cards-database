import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Houndoom",
		'fr-fr': "Démolosse",
		'de-de': "Hundemon"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [229],

	hp: 70,

	types: [
		"Darkness"
	],

	evolveFrom: {
		'en-us': "Houndour",
		'fr-fr': "Malosse"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Fireworks",
				'fr-fr': "Feu d'artifice",
				'de-de': "Feuerwerk"
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard a Fire Energy card attached to Houndoom.",
				'fr-fr': "Lancez une pièce. Si c'est pile, défaussez-vous d'une carte Énergie  attachée à Démolosse.",
				'de-de': "Wirf eine Münze. Lege bei \"Zahl\" eine an Hundemon angelegte -Energiekarte auf deinen Ablagestapel."
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dark Impact",
				'fr-fr': "Sombre impact",
				'de-de': "Finsterer Einfluss"
			},
			effect: {
				'en-us': "The Defending Pokémon can't use any Poké-Powers until the end of your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas utiliser de Poké-Powers jusqu'à la fin du prochain tour de votre adversaire.",
				'de-de': "Das Verteidigende Pokémon kann bis zum Ende des nächsten Zuges deines Gegners keine Poké-Power verwenden."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86199,
				cardmarket: 275086
			}
		},
	]
}

export default card
