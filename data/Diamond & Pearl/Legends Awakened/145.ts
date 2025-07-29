import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Rhyperior",
		fr: "Rhinastoc",
		de: "Rihornior"
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
				en: "Hard Crush",
				fr: "Écras'dur",
				de: "Heftiger Zermalmer"
			},
			effect: {
				en: "Discard the top 5 cards from your deck. This attack does 50 damage for each Energy card you discarded.",
				fr: "Défaussez les 5 cartes du dessus de votre deck. Cette attaque inflige 50 dégâts par chaque carte Énergie défaussée.",
				de: "Lege die obersten 5 Karten deines Decks auf deinen Ablagestapel. Dieser Angriff fügt für jede Energiekarte, die auf diese Weise abgelegt wurde, 50 Schadenspunkte zu."
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
				en: "Upthrow",
				fr: "Soulèvement",
				de: "Verwerfung"
			},
			effect: {
				en: "Search your discard pile for all Fighting Energy cards, show them to your opponent, and shuffle them into your deck.",
				fr: "Cherchez dans votre pile de défausse toutes les cartes Énergie Fighting, montrez-les à votre adversaire et mélangez-les à votre deck.",
				de: "Durchsuche deinen Ablagestapel nach allen -Energiekarten, zeige sie deinem Gegner und mische sie in dein Deck."
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
		cardmarket: 278294
	}
}

export default card
