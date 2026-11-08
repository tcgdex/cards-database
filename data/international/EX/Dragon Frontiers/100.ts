import { Card } from 'models/database/card'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		'en-us': "Charizard ☆ δ",
		'fr-fr': "Dracaufeu ☆ δ",
		'de-de': "Glurak ☆ δ"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		6,
	],
	hp: 90,
	types: [
		"Darkness",
	],

	stage: "Basic",


	

	retreat: 3,


	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Rotating Claws",
				'fr-fr': "Griffes tournantes",
				'de-de': "Rotierende Klauen"
			},
			effect: {
				'en-us': "You may discard an Energy card attached to Charizard ☆. If you do, search your discard pile for an Energy card (excluding the one you discarded) and attach it to Charizard ☆.",
				'fr-fr': "Vous pouvez défausser une carte Énergie attachée à Dracaufeu ☆. Choisissez alors dans votre pile de défausse une carte Énergie (celle que vous venez de défausser exclue) et attachez-la à Dracaufeu ☆.",
				'de-de': "Du kannst eine Energiekarte, die an Glurak ☆ angelegt ist, auf den Ablagestapel legen. Wenn du das machst, durchsuche deinen Ablagestapel nach einer Energiekarte (außer der, die du abgelegt hast) und lege sie an Glurak ☆ an."
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Dark Swirl",
				'fr-fr': "Tourbillon obscur",
				'de-de': "Dunkler Wirbel"
			},
			effect: {
				'en-us': "Discard all Energy cards attached to Charizard Star and discard the top 3 cards from your opponent's deck.",
				'fr-fr': "Défaussez toutes les cartes Énergie attachées à Dracaufeu Star et défaussez les 3 cartes du dessus du deck de votre adversaire.",
				'de-de': "Lege alle Energiekarten, die an Glurak Star angelegt sind, auf deinen Ablagestapel. Lege die obersten 3 Karten vom Deck deines Gegners auf seinen Ablagestapel."
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
