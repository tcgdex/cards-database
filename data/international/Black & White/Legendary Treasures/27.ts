import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Emboar",
	},

	illustrator: "Kanako Eo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		500,
	],

	hp: 150,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Pignite",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Inferno Fandango",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may attach a Fire Energy card from your hand to 1 of your Pokémon.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heat Crash",
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		en: "It can throw a fire punch by setting its fists on fire with its fiery chin. It cares deeply about its friends.",
	},

	thirdParty: {
		cardmarket: 281178,
		tcgplayer: 85186
	}
}

export default card
