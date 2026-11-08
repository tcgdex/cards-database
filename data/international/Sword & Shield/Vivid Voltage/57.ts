import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [602],

	name: {
		'en-us': "Tynamo",
		'fr-fr': "Anchwatt",
		'es-es': "Tynamo",
		'it-it': "Tynamo",
		'pt-br': "Tynamo",
		'de-de': "Zapplardin"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 40,

	types: [
		"Lightning",
	],

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Levitate",
				'fr-fr': "Lévitation",
				'es-es': "",
				'it-it': "",
				'pt-br': "",
				'de-de': ""
			},
			effect: {
				'en-us': "If this Pokémon has any Energy attached, it has no Retreat Cost.",
				'fr-fr': "Si de l'Énergie est attachée à ce Pokémon, il n'a pas de Coût de Retraite.",
				'es-es': "",
				'it-it': "",
				'pt-br': "",
				'de-de': ""
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Tiny Charge",
				'fr-fr': "Décharge Mineure",
				'es-es': "Carga Diminuta",
				'it-it': "Sottocarica Minuscola",
				'pt-br': "Carga Pequenina",
				'de-de': "Mini-Stromstoß"
			},

			damage: 10,

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
		'en-us': "One alone can emit only trickle of electricity, so a group of them gathers to unleash a powerful electric shock."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511705,
				tcgplayer: 226455
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511705,
				tcgplayer: 226455
			}
		},
	],
}

export default card
