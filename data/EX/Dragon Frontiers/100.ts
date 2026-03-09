import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Charizard Star δ",
		fr: "Dracaufeu ☆ δ",
		de: "Glurak *"
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
				en: "Rotating Claws",
				fr: "Griffes tournantes",
				de: "Rotierende Klauen"
			},
			effect: {
				en: "You may discard an Energy card attached to Charizard Star. If you do, search your discard pile for an Energy card (excluding the one you discarded) and attach it to Charizard Star.",
				fr: "Vous pouvez défausser une carte Énergie attachée à Dracaufeu . Choisissez alors dans votre pile de défausse une carte Énergie (celle que vous venez de défausser exclue) et attachez-la à Dracaufeu .",
				de: "Du kannst eine Energiekarte, die an Glurak* angelegt ist, auf den Ablagestapel legen. Wenn du das machst, durchsuche deinen Ablagestapel nach einer Energiekarte (außer der, die du abgelegt hast) und lege sie an Glurak* an."
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
				en: "Dark Swirl",
				fr: "Tourbillon obscur",
				de: "Dunkler Wirbel"
			},
			effect: {
				en: "Discard all Energy cards attached to Charizard Star and discard the top 3 cards from your opponent's deck.",
				fr: "Défaussez toutes les cartes Énergie attachées à Dracaufeu  et défaussez les 3 cartes du dessus du deck de votre adversaire.",
				de: "Lege alle Energiekarten, die an Glurak* angelegt sind, auf deinen Ablagestapel. Lege die obersten 3 Karten vom Deck deines Gegners auf seinen Ablagestapel."
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
