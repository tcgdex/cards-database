import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Sealeo",
		fr: "Phogleur",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		364,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Spheal",
		fr: "Obalie",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rest",
				fr: "Repos",
			},
			effect: {
				en: "Heal 60 damage from this Pokémon. This Pokémon is now Asleep.",
				fr: "Soignez 60 dégâts à ce Pokémon. Ce Pokémon est maintenant Endormi.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Ice Ball",
				fr: "Ball’Glace",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
