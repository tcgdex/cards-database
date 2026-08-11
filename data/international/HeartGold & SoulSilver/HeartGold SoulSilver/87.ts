import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Vulpix",
		'fr-fr': "Goupix",
		'de-de': "Vulpix"
	},

	illustrator: "TOKIYA",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [37],

	hp: 50,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Singe",
				'fr-fr': "Roussir",
				'de-de': "Versengung"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Burned.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verbrannt."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Ember",
				'fr-fr': "Flammèche",
				'de-de': "Glut"
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard a Fire Energy attached to Vulpix.",
				'fr-fr': "Lancez une pièce. Si c’est pile, défaussez-vous d’une carte Énergie Fire attachée à Goupix.",
				'de-de': "Wirf eine Münze. Bei \"Zahl\" lege 1 an Vulpix angelegte -Energie auf deinen Ablagestapel."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "If it is attacked by an enemy that is stronger than itself, it feigns injury to fool the enemy and escapes."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90444,
				cardmarket: 279059
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90444,
				cardmarket: 279059
			}
		},
	],

}

export default card
