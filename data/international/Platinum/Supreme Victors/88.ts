import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Yanma",
		'fr-fr': "Yanma",
		'de-de': "Yanma"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [193],

	hp: 70,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Supersonic",
				'fr-fr': "Ultrason",
				'de-de': "Superschall"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verwirrt."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Air Slash",
				'fr-fr': "Lame d'air",
				'de-de': "Luftschnitt"
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard an Energy attached to Yanma.",
				'fr-fr': "Lancez une pièce. Si c'est pile, défaussez une carte Énergie attachée à Yanma.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" entferne 1 Energiekarte, die an Yanma angelegt ist, und lege sie auf deinen Ablagestapel."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "It can hover is one spot by flapping its wings at high speed. It flits about to guard its territory."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90686,
				cardmarket: 278779
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278691,
				tcgplayer: 90686
			}
		},
	],

}

export default card
