import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2017'

const card: Card = {
	dexId: [
		789,
	],
	set: Set,
	name: {
		en: "Cosmog",
		fr: "Cosmog",
		de: "Cosmog"
	},
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Psychic",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dust Gathering",
				fr: "Ramasse Poussière",
				de: "Staubfänger"
			},
			effect: {
				en: "Draw a card",
				fr: "Piochez une carte.",
				de: "Ziehe 1 Karte."
			},
		},
	],

	illustrator: "Megumi Mizutani",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 301848,
				tcgplayer: 152686
			}
		}
	]
}

export default card

