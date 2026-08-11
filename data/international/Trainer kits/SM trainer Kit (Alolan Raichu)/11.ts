import { Card } from '../../../interfaces'
import Set from '../SM trainer Kit (Alolan Raichu)'

const card: Card = {
	dexId: [41],
	set: Set,

	name: {
		en: "Zubat",
		fr: "Nosferapti",
		es: "Zubat",
		it: "Zubat",
		pt: "Zubat",
		de: "Zubat"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: [
		"Psychic"
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Astonish"
			},
			effect: {
				en: "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into their deck."
			}
		},
	],
	stage: "Basic",
	retreat: 1,

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-20"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 297242,
				tcgplayer: 152864
			}
		},
	],

}

export default card