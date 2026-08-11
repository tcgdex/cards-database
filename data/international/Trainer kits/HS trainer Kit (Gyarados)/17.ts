import { Card } from '../../../interfaces'
import Set from '../HS trainer Kit (Gyarados)'

const card: Card = {
	name: {
		en: "Croconaw",
	},

	illustrator: "kawayoo",
	rarity: "None",
	category: "Pokemon",
	set: Set,
	dexId: [159],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Totodile",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Wave Splash",
			},
			damage: 30,
		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Big Bite",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			},
			damage: 50,
		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279102,
				tcgplayer: 84502,
			},
		},
	],

}

export default card
