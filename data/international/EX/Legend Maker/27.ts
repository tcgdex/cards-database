import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "Torkoal",
		'fr-fr': "Chartor",
		'de-de': "Qurtel"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		324,
	],

	hp: 80,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Cry for Help",
				'fr-fr': "Appel à l'aide",
				'de-de': "Hilfeschrei"
			},
			effect: {
				'en-us': "Search your deck for a Fire Pokémon (excluding Pokémon-ex), show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck un Pokémon  (Pokémon-ex exclus), montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche Dein Deck nach einem -Pokémon (außer Pokémon-ex), zeige es deinem Gegner und nimm es auf deine Hand. Mische dein Deck danach."
			},

		},
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
				'en-us': "Flip a coin. If tails, discard a Fire Energy attached to Torkoal.",
				'fr-fr': "Lancez une pièce. Si c'est pile, défaussez une Énergie  attachée à Chartor.",
				'de-de': "Wirf 1 Münze. Lege bei \"Zahl\" eine an Qurtel angelegte -Energie auf deinen Ablagestapel."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276904,
		tcgplayer: 89968
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
