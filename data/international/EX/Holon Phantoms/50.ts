import { Card } from 'models/database/card'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		'en-us': "Primeape δ",
		'fr-fr': "Colossinge δ",
		'de-de': "Rasaff"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		57,
	],

	hp: 70,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Mankey",
		'fr-fr': "Férosinge"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Wreck",
				'fr-fr': "Anéantissement",
				'de-de': "Zerschlagen"
			},
			effect: {
				'en-us': "If there is any Stadium card in play, this attack does 30 damage plus 30 more damage. Discard that Stadium card.",
				'fr-fr': "Si une carte Stade est en jeu, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires. Défaussez cette carte Stade.",
				'de-de': "Wenn sich eine Stadion-Karte im Spiel befindet, fügt dieser Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zu. Lege danach die Stadion-Karte auf den Ablagestapel."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flames of Rage",
				'fr-fr': "Flammes de rage",
				'de-de': "Wutflammen"
			},
			effect: {
				'en-us': "Discard 2 Energy attached to Primeape. This attack does 10 damage plus 20 more damage for each damage counter on Primeape.",
				'fr-fr': "Défaussez 2 Énergies attachées à Colossinge. Cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires pour chaque marqueur de dégât sur Colossinge.",
				'de-de': "Lege 2 Energien, die an Rasaff angelegt sind, auf deinen Ablagestapel. Dieser Angriff fügt 10 Schadenspunkte plus 20 weitere Schadenspunkte für jede Schadensmarke auf Rasaff zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 0,

	thirdParty: {
		cardmarket: 277020
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
	]
}

export default card
