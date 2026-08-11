import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [309],

	name: {
		'en-us': "Electrike",
		'fr-fr': "Dynavolt",
		'es-es': "Electrike",
		'it-it': "Electrike",
		'pt-br': "Electrike",
		'de-de': "Frizelbliz"
	},

	illustrator: "Yumi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Lightning",
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thunderbolt",
				'fr-fr': "Tonnerre",
				'es-es': "Rayo",
				'it-it': "Fulmine",
				'pt-br': "Relâmpago",
				'de-de': "Donnerblitz"
			},
			effect: {
				'en-us': "Discard all Energy from this Pokémon.",
				'fr-fr': "Défaussez toute l'Énergie de ce Pokémon.",
				'es-es': "Descarta todas las Energías de este Pokémon.",
				'it-it': "Scarta tutte le Energie da questo Pokémon.",
				'pt-br': "Descarte todas as Energias deste Pokémon.",
				'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It stores static electricity in its fur for discharging. It gives off sparks if a storm approaches."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483164,
				tcgplayer: 219407
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483164,
				tcgplayer: 219407
			}
		},
	],
}

export default card
