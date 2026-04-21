import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2022'

const card: Card = {
	name: {
		en: "Cutiefly",
		fr: "Bombydou",
		es: "Cutiefly",
		it: "Cutiefly",
		pt: "Cutiefly",
		de: "Wommel"
	},

	illustrator: "Yukiko Baba",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [742],

	hp: 30,

	types: ["Psychic"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				en: "Flap",
			},
			damage: 10,
		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,
	
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 670476,
				tcgplayer: 281494
			}
		}
	]
}

export default card

