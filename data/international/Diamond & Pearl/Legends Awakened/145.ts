import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Rhyperior",
		'fr-fr': "Rhinastoc",
		'de-de': "Rihornior"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",
	set: Set,

	dexId: [
		464,
	],

	hp: 170,

	types: [
		"Fighting",
	],

	stage: "LEVEL-UP",

	attacks: [
		{

			name: {
				'en-us': "Hard Crush",
				'fr-fr': "Écras'dur",
				'de-de': "Heftiger Zermalmer"
			},
			effect: {
				'en-us': "Discard the top 5 cards from your deck. This attack does 50 damage for each Energy card you discarded.",
				'fr-fr': "Défaussez les 5 cartes du dessus de votre deck. Cette attaque inflige 50 dégâts par chaque carte Énergie défaussée.",
				'de-de': "Lege die obersten 5 Karten deines Decks auf deinen Ablagestapel. Dieser Angriff fügt für jede Energiekarte, die auf diese Weise abgelegt wurde, 50 Schadenspunkte zu."
			},
			damage: "50x",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Upthrow",
				'fr-fr': "Soulèvement",
				'de-de': "Verwerfung"
			},
			effect: {
				'en-us': "Search your discard pile for all Fighting Energy cards, show them to your opponent, and shuffle them into your deck.",
				'fr-fr': "Cherchez dans votre pile de défausse toutes les cartes Énergie Fighting, montrez-les à votre adversaire et mélangez-les à votre deck.",
				'de-de': "Durchsuche deinen Ablagestapel nach allen -Energiekarten, zeige sie deinem Gegner und mische sie in dein Deck."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 278294,
		tcgplayer: 88749
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
