import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2023'

const card: Card = {
	name: {
		'en-us': "Flittle",
		'fr-fr': "Flotillon",
		'es-es': "Flittle",
		'it-it': "Flittle",
		'pt-br': "Flittle",
		'de-de': "Flattutu"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [955],

	hp: 30,

	types: ["Psychic"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'en-us': "Ram",
			},
			damage: 10,
		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 0,

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725426,
				tcgplayer: 516520
			}
		}
	]
}

export default card

