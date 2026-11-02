import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		fr: "Arceus",
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [493],

	hp: 90,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				fr: "Feuille revigorante",
			},
			effect: {
				fr: "Retirez 3 marqueurs de dégât à chacun des Pokémon de votre Banc.",
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

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278861,
				tcgplayer: 83593
			}
		}
	]
}

export default card
