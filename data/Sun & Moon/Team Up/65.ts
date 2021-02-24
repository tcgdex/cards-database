import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Starmie",
		fr: "Staross",
	},
	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		121,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Staryu",
		fr: "Stari",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Strange Wave",
				fr: "Vague Insolite",
			},
			effect: {
				en: "Search your deck for up to 3 in any combination of Water and Psychic Energy cards and attach them to 1 of your Benched Pokémon. Then, shuffle your deck.",
				fr: "Cherchez une combinaison d’un maximum de 3 cartes Énergie Water et Psychic dans votre deck et attachez-les à l’un de vos Pokémon de Banc. Mélangez ensuite votre deck.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
