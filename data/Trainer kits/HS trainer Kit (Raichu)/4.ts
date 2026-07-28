import { Card } from '../../../interfaces'
import Set from '../HS trainer Kit (Raichu)'

const card: Card = {
	name: {
		en: "Meowth",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "None",
	category: "Pokemon",
	set: Set,
	dexId: [52],
	hp: 60,
	types: [
		"Colorless",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pay Day",
			},
			effect: {
				en: "Draw a card.",
			},
			damage: 10,
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dig Claws",
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
			type: "normal",
			thirdParty: {
				cardmarket: 279113,
				tcgplayer: 87323,
			},
		},
	],

}

export default card
