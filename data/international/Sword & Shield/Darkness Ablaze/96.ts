import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [660],

	name: {
		'en-us': "Diggersby",
		'fr-fr': "Excavarenne",
		'es-es': "Diggersby",
		'it-it': "Diggersby",
		'pt-br': "Diggersby",
		'de-de': "Grebbit"
	},

	illustrator: "0313",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Bunnelby",
		'fr-fr': "Sapereau",
		'es-es': "Bunnelby",
		'it-it': "Bunnelby",
		'pt-br': "Bunnelby",
		'de-de': "Scoppel"
	},

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
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

			damage: 90,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Land Crush",
				'fr-fr': "Écras'Terre",
				'es-es': "Aterrizaje",
				'it-it': "Schiacciaterra",
				'pt-br': "Aperto de Terra",
				'de-de': "Schollenbrecher"
			},

			damage: 140,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "With power equal to an excavator, it can dig through dense bedrock. It's a huge help during tunnel construction."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483359,
				tcgplayer: 219491
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483359,
				tcgplayer: 219491
			}
		},
	],
}

export default card
