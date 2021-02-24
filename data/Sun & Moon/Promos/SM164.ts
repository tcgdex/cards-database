import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Deoxys",
		fr: "Deoxys",
	},
	illustrator: "You Iribi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		386,
	],
	hp: 110,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Power Suction",
				fr: "Succion Puissante",
			},
			effect: {
				en: "Once during your turn (before your attack), you may move an Energy from 1 of your Pokémon to 1 of your Deoxys.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie de l’un de vos Pokémon vers l’un de vos Deoxys.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psycho Boost",
				fr: "Psycho Boost",
			},
			effect: {
				en: "During your next turn, this Pokémon's Psycho Boost attack's base damage is 50.",
				fr: "Pendant votre prochain tour, les dégâts de base de l’attaque Psycho Boost de ce Pokémon sont de 50.",
			},
			damage: 100,

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
