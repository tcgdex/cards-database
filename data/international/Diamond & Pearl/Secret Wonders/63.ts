import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Sableye",
		'fr-fr': "Ténéfix",
		'de-de': "Zobiris"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		302,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Rummage",
				'fr-fr': "Farfouiller",
				'de-de': "Durchstöbern"
			},
			effect: {
				'en-us': "Look at the top 5 cards of your deck. Choose as many Trainer cards as you like, show them to your opponent, and put them into your hand. Put the other cards back on top of your deck. Shuffle your deck afterward.",
				'fr-fr': "Regardez les 5 cartes du dessus de votre deck. Choisissez autant de cartes Dresseur que vous voulez, montrez-les à votre adversaire et placez-les dans votre main. Replacez les autres cartes au dessus de votre deck. Ensuite, mélangez votre deck.",
				'de-de': "Schau dir die obersten 5 Karten deines Decks an. Wähle beliebig viele Trainerkarten, die du dort gefunden hast, zeige sie deinem Gegner und nimm sie auf die Hand. Lege die anderen Karten auf dein Deck. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Shadow Sneak",
				'fr-fr': "Ombre Portée",
				'de-de': "Schattenstoß"
			},
			effect: {
				'en-us': "If you and your opponent have a different number of Prize cards left, this attack does 20 damage plus 20 more damage.",
				'fr-fr': "S'il reste à vous et votre adversaire un nombre différent de cartes Récompense, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Wenn du und dein Gegner eine unterschiedliche Anzahl Preise übrig haben, fügt dieser Angriff 20 Schadenspunkte plus weitere 20 Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It hides in the darkness of caves. Its diet of gems has transformed its eyes into gemstones.",
	},

	thirdParty: {
		cardmarket: 277816,
		tcgplayer: 88852
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
