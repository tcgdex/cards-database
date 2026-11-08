import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Pancham",
		'fr-fr': "Pandespiègle",
		'es-es': "Pancham",
		'it-it': "Pancham",
		'pt-br': "Pancham",
		'de-de': "Pam-Pam"
	},

	illustrator: "Motofumi Fujiwara",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		674,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
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
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It follows Pangoro around like a henchman. When Pancham makes a big mistake, its leaf gets taken away.",
	},

	thirdParty: {
		cardmarket: 408244,
		tcgplayer: 201151
	}
}

export default card
