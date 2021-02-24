import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Nidoran♂",
		fr: "Nidoran♂",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		32,
	],
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
				en: "Collect",
				fr: "Collectionner",
			},
			effect: {
				en: "Draw a card.",
				fr: "Piochez une carte.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Poison Skin",
				fr: "Peau poison",
			},
			effect: {
				en: "Flip 2 coins. If either of them is heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez 2 pièces. Si vous obtenez une face, le Pokémon Défenseur est maintenant Empoisonné.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
