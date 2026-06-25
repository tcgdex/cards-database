import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2022'

const card: Card = {
	name: {
		en: "Ledyba",
		fr: "Coxy",
		es: "Ledyba",
		it: "Ledyba",
		pt: "Ledyba",
		de: "Ledyba"
	},

	illustrator: "Naoyo Kimura",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [165],

	hp: 60,

	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				en: "Collect",
			},
			effect: {
				en: "Draw a card.",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				en: "Punch",
			},
			damage: 20,
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 670466,
				tcgplayer: 281476
			}
		}
	]
}

export default card

