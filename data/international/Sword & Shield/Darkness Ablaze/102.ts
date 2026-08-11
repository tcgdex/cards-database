import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [167],

	name: {
		'en-us': "Spinarak",
		'fr-fr': "Mimigal",
		'es-es': "Spinarak",
		'it-it': "Spinarak",
		'pt-br': "Spinarak",
		'de-de': "Webarak"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Darkness",
	],

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Hang Down",
				'fr-fr': "Suspension",
				'es-es': "Prender",
				'it-it': "Tirar Giù",
				'pt-br': "Dependurar",
				'de-de': "Herunterhängen"
			},

			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Sting",
				'fr-fr': "Dard",
				'es-es': "Aguijonazo",
				'it-it': "Puntura",
				'pt-br': "Ferroada",
				'de-de': "Einstich"
			},

			damage: 20,

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
		'en-us': "Although the poison from its fangs isn't that strong, it's potent enough to weaken prey that gets caught in its web."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483389,
				tcgplayer: 219404
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483389,
				tcgplayer: 219404
			}
		},
	],
}

export default card
