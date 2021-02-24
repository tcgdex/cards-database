import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Nidorina",
		fr: "Nidorina",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		30,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Nidoran♀",
		fr: "Nidoran♀",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Family Rescue",
				fr: "Sauvetage Familial",
			},
			effect: {
				en: "Shuffle 5 Psychic Pokémon from your discard pile into your deck.",
				fr: "Mélangez 5 Pokémon Psychic de votre pile de défausse avec votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
