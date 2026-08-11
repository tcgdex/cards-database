import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [852],

	name: {
		'en-us': "Clobbopus",
		'fr-fr': "Poulpaf",
		'es-es': "Clobbopus",
		'it-it': "Clobbopus",
		'pt-br': "Clobbopus",
		'de-de': "Klopptopus"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 80,

	types: [
		"Fighting",
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Beat",
				'fr-fr': "Bataille",
				'es-es': "Toque",
				'it-it': "Battuta",
				'pt-br': "Pulso",
				'de-de': "Verprügler"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Hammer In",
				'fr-fr': "Enfoncement",
				'es-es': "Martillear",
				'it-it': "Martello",
				'pt-br': "Martelada",
				'de-de': "Einhämmern"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It's very curious, but its means of investigating things is to try to punch them with its tentacles. The search for food is what brings it onto land."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511920,
				tcgplayer: 226552
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511920,
				tcgplayer: 226552
			}
		},
	],
}

export default card
