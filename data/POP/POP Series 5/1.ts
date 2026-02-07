import { Card } from '../../../interfaces'
import Set from '../POP Series 5'

const card: Card = {
	name: {
		en: "Ho-Oh",
		fr: "Ho-Oh"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		250,
	],

	hp: 80,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Wing",
				fr: "Aile de feu"
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Blast",
				fr: "Déflagration"
			},
			effect: {
				en: "Discard a Fire Energy attached to Ho-Oh.",
				fr: "Défaussez une Énergie  attachée à ce Pokémon."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water"
		},
	],

	retreat: 2,

	variants: [
		{ type: 'normal', size: 'standard' },
		{ type: 'holo', size: 'standard' }
	],

	thirdParty: {
		cardmarket: 277483,
		tcgplayer: 86123
	}
}

export default card
