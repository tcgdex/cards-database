import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	name: {
		en: "Grookey",
		fr: "Ouistempo",
		es: "Grookey",
		it: "Grookey",
		pt: "Grookey",
		de: "Chimpep"
	},

	illustrator: "kirisAki",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Branch Poke",
				fr: "Tapotige",
				es: "Punzada Rama",
				it: "Ramostoccata",
				pt: "Cutucada com Galho",
				de: "Zweigstoß"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "When it uses its special stick to strike up a beat, the sound waves produced carry revitalizing energy to the plants and flowers in the area."
	},

	dexId: [810],

	regulationMark: "D",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 427081,
				tcgplayer: 200300
			}
		},
		{
			type: "holo",
			size: "jumbo",
			stamp: ["25th-celebration"],
			thirdParty: {
				cardmarket: 547426,
				tcgplayer: 231458
			}
		},
	],
}

export default card
