import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Buneary",
		'fr-fr': "Laporeille",
		'de-de': "Haspiror"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		427,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Rest",
				'fr-fr': "Repos",
				'de-de': "Ruhe"
			},
			effect: {
				'en-us': "Remove all Special Conditions and 4 damage counters from Buneary. Buneary is now Asleep.",
				'fr-fr': "Retirez à Laporeille tous ses États Spéciaux ainsi que 4 marqueurs de dégât. Laporeille est maintenant Endormi.",
				'de-de': "Entferne alle Speziellen Zustände und 4 Schadensmarken von Haspiror. Haspiror schläft jetzt."
			},

		},
		{
			cost: [
				"Colorless",
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

	retreat: 1,

	description: {
		'en-us': "It slams foes by sharply uncoiling its rolled ears. It stings enough to make a grown-up cry in pain.",
		'fr-fr': "Il frappe l'ennemi en déroulant violemment ses oreilles. Cela peut faire pleurer un adulte."
	},

	thirdParty: {
		cardmarket: 278235,
		tcgplayer: 84040
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
