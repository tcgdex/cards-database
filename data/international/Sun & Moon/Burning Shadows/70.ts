import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Riolu",
		'fr-fr': "Riolu",
		'es-es': "Riolu",
		'it-it': "Riolu",
		'pt-br': "Riolu",
		'de-de': "Riolu"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		447,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Punch",
				'fr-fr': "Koud’Poing",
				'es-es': "Puño",
				'it-it': "Pugno",
				'pt-br': "Soco",
				'de-de': "Boxhieb"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Low Kick",
				'fr-fr': "Balayage",
				'es-es': "Patada Baja",
				'it-it': "Colpo Basso",
				'pt-br': "Rasteira",
				'de-de': "Fußkick"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It can discern the physical and emotional states of people, Pokémon, and other natural things from the shape of their aura waves.",
	},

	thirdParty: {
		cardmarket: 299472,
		tcgplayer: 138556
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
