import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Sharpedo",
		'fr-fr': "Sharpedo",
		'de-de': "Tohaido"
	},

	illustrator: "MAHOU",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [319],

	hp: 90,

	types: [
		"Darkness"
	],

	evolveFrom: {
		'en-us': "Carvanha",
		'fr-fr': "Carvanha"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Strip Bare",
				'fr-fr': "Croktou",
				'de-de': "Blankmacher"
			},
			effect: {
				'en-us': "Flip 2 coins. If both of them are heads, your opponent discards all card from his or her hand.",
				'fr-fr': "Lancez 2 pièces. Si vous obtenez deux fois un côté face, votre adversaire défausse toutes les cartes de sa main.",
				'de-de': "Wirf 2 Münzen. Wenn beide \"Kopf\" zeigen, legt dein Gegner alle Handkarten auf seinen Ablagestapel."
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rage",
				'fr-fr': "Frénésie",
				'de-de': "Raserei"
			},
			effect: {
				'en-us': "Does 50 damage plus 10 more damage for each damage counter on Sharpedo.",
				'fr-fr': "Inflige 50 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât placé sur Sharpedo.",
				'de-de': "Dieser Angriff fügt 50 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf Tohaido zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It can swim at speeds of 75 mph by jetting seawater through its body. It is the bandit of the sea."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89101,
				cardmarket: 279560
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279560,
				tcgplayer: 89101
			}
		},
	],

}

export default card
