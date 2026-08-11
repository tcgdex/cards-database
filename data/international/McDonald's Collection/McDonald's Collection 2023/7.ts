import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2023'

const card: Card = {
	name: {
		'en-us': "Pawmi",
		'fr-fr': "Pohm",
		'es-es': "Pawmi",
		'it-it': "Pawmi",
		'pt-br': "Pawmi",
		'de-de': "Pamo"
	},

	illustrator: "kantaro",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [921],

	hp: 60,

	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'en-us': "Light Punch",
			},
			damage: 10,
		},
		{
			cost: ["Lightning", "Colorless"],
			name: {
				'en-us': "Zap Kick",
				'fr-fr': "Coup d'Jus",
				'es-es': "Patada Eléctrica",
				'it-it': "Elettrocalcio",
				'pt-br': "Chute Elétrico",
				'de-de': "Stromtritt"
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

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725424,
				tcgplayer: 516518
			}
		}
	]
}

export default card

