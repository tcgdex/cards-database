import { Card } from '../../../interfaces'
import Set from '../Detective Pikachu'

const card: Card = {
	name: {
		en: "Psyduck",
		fr: "Psykokwak",
	},
	illustrator: undefined,
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		54,
	],
	hp: 80,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Panic",
				fr: "Panique",
			},
			effect: {
				en: "This Pokémon is now Confused.",
				fr: "Ce Pokémon est maintenant Confus.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
