import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Mewtwo-EX",
		fr: "Mewtwo-EX",
		es: "Mewtwo-EX",
		it: "Mewtwo-EX",
		pt: "Mewtwo-EX",
		de: "Mewtu-EX"
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		150,
	],
	hp: 170,
	types: [
		"Psychic",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "X Ball",
				fr: "X Ball",
			},
			effect: {
				en: "Does 20 damage times the amount of Energy attached to this Pokémon and the Defending Pokémon.",
				fr: "Inflige 20 dégâts multipliés par le nombre d'Énergies attachées à ce Pokémon et au Pokémon Défenseur.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psydrive",
				fr: "Psykoforce",
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
			},
			damage: 120,

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
