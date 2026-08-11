import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Bulbasaur",
		fr: "Bulbizarre",
		de: "Bisasam"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [1],

	hp: 60,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				de: "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Vine Whip",
				fr: "Fouet lianes",
				de: "Rankenhieb"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],
	retreat: 1,

	description: {
		en: "For some time after its birth, it grows by gaining nourishment from the seed on its back."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278784,
				tcgplayer: 84035
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278784,
				tcgplayer: 84035
			}
		},
	],

}

export default card
