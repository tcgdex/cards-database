import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Mantine",
		'fr-fr': "Demanta",
		'de-de': "Mantax"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		226,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Undulate",
				'fr-fr': "Annulation",
				'de-de': "Undulate"
			},
			effect: {
				'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Mantine.",
				'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, prévenez tous les effets d'attaques, y compris les dégâts, infligés à Demanta.",
				'de-de': "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Mantine."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Swimming freely in open seas, it may fly out of the water and over the waves if it builds up enough speed.",
		'fr-fr': "Nageant librement en pleine mer, il peut s'envoler hors de l'eau et par-dessus les vagues s'il prend suffisamment de vitesse."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274464,
				tcgplayer: 87179
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274464,
				tcgplayer: 87179
			}
		}
	]
}

export default card
