import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "M Gardevoir-EX",
		fr: "M-Gardevoir-EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		282,
	],
	hp: 210,
	types: [
		"Fairy",
		"Psychic",
	],
	evolveFrom: {
		en: "Gardevoir-EX",
		fr: "Gardevoir-EX",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Despair Ray",
				fr: "Rayon Désespoir",
			},
			effect: {
				en: "Discard as many of your Benched Pokémon as you like. This attack does 10 more damage for each Benched Pokémon you discarded in this way.",
				fr: "Défaussez autant de vos Pokémon de Banc que vous voulez. Cette attaque inflige 10 dégâts supplémentaires pour chaque Pokémon de Banc défaussé de cette façon.",
			},
			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
