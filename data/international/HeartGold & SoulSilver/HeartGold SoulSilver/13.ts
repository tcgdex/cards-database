import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Wobbuffet",
		'fr-fr': "Qulbutoke",
		'de-de': "Woingenau"
	},

	illustrator: "Yuka Morii",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [202],

	hp: 90,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Double Return",
				'fr-fr': "Double retour",
				'de-de': "Doppelbonus"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage times the number of damage counters on Wobbuffet.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts multipliés par le nombre de marqueurs de dégâts sur Qulbutoke.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 20 Schadenspunkte mal der Anzahl an Schadensmarken auf Woingenau zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It hates light and shock. If attacked, it inflates its body to build up its counterstrike."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90621,
				cardmarket: 278985
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90621,
				cardmarket: 278985
			}
		},
	],

}

export default card
