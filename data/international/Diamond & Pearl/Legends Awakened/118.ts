import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Shinx",
		'fr-fr': "Lixy",
		'de-de': "Sheinux"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		403,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Recharge",
				'fr-fr': "Recharger",
				'de-de': "Auffüllen"
			},
			effect: {
				'en-us': "Search your deck for a Lightning Energy card and attach it to Shinx. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck une carte Énergie Lightning et attachez-la à Lixy. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach 1 -Energiekarte und lege sie an Sheinux an. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Double Kick",
				'fr-fr': "Double pied",
				'de-de': "Doppelkick"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "All of its fur dazzles if danger is sensed. It flees while the foe is momentarily blinded.",
	},

	thirdParty: {
		cardmarket: 278267,
		tcgplayer: 89174
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
