import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Poliwrath",
		'fr-fr': "Tartard",
		'de-de': "Quappo"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		62,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Poliwhirl",
		'fr-fr': "Quaputzi",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Focus Punch",
				'fr-fr': "Mitra-poing",
				'de-de': "Power-Punch"
			},
			effect: {
				'en-us': "If Poliwrath was damaged by an attack during your opponent's last turn, this attack does nothing.",
				'fr-fr': "Si une attaque a infligé des dégâts à Tartard lors du dernier tour de votre adversaire, cette attaque est sans effet.",
				'de-de': "Wenn Quappo im letzten Zug deines Gegners durch einen Angriff Schaden zugefügt wurde, hat dieser Angriff keine Auswirkungen."
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Submission",
				'fr-fr': "Sacrifice",
				'de-de': "Überroller"
			},
			effect: {
				'en-us': "Poliwrath does 20 damage to itself.",
				'fr-fr': "Tartard s'inflige 20 dégâts.",
				'de-de': "Quappo fügt sich selbst 20 Schadenspunkte zu."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+30"
		},
	],

	retreat: 2,

	description: {
		'en-us': "With extremely tough muscles, it can keep swimming in the Pacific Ocean without resting.",
		'fr-fr': "Il possède de sacrés biscoteaux. Il peut parcourir sans relâche l'Océan Pacifique."
	},

	thirdParty: {
		cardmarket: 278184,
		tcgplayer: 88278
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
