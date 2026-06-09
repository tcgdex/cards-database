import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2023'

const card: Card = {
	name: {
		en: "Flittle",
		fr: "Flotillon",
		es: "Flittle",
		it: "Flittle",
		pt: "Flittle",
		de: "Flattutu"
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
				en: "Ram",
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

