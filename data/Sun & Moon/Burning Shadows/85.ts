import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Sneasel",
		fr: "Farfuret",
	},
	illustrator: "Hasuno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		215,
	],
	hp: 70,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hone Claws",
				fr: "Aiguisage",
			},
			effect: {
				en: "During your next turn, this Pokémon's Slash attack's base damage is 80.",
				fr: "Pendant votre prochain tour, les dégâts de base de l’attaque Tranche de ce Pokémon sont de 80.",
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
