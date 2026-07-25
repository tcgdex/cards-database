import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Rapidash",
		de: "Gallopa"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [78],

	hp: 90,

	types: [
		"Fire"
	],

	evolveFrom: {
		en: "Ponyta"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Searing Flame",
				de: "Sengende Flammen"
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
				de: "Das Verteidigende Pokémon ist jetzt verbrannt."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flare",
				de: "Flackern"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	description: {
		en: "When at an all-out gallop, its blazing mane sparkles, enhancing its beautiful appearance."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88586,
				cardmarket: 278900
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278900,
				tcgplayer: 88586
			}
		},
	],

	retreat: 0
}

export default card
