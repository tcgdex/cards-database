import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Jynx",
		fr: "Lippoutou",
	},
	illustrator: "HYOGONOSUKE",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		124,
	],
	hp: 90,
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
				en: "Dazzle Dance",
				fr: "Danse Éblouissante",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Mysterious Dance",
				fr: "Danse Mystérieuse",
			},
			effect: {
				en: "For each of your opponent's Benched Pokémon, put 1 damage counter on your opponent's Pokémon in any way you like.",
				fr: "Pour chaque Pokémon de Banc de votre adversaire, placez un marqueur de dégâts sur les Pokémon de votre adversaire de la manière que vous voulez.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
