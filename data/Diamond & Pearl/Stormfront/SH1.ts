import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Drifloon",
		fr: "Drifloon (different color)",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		425,
	],
	hp: 50,
	types: [
		"Psychic",
	],
	evolveFrom: {
		fr: "Baudrive",
	},
	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Unburden",
				fr: "Délestage",
			},
			effect: {
				en: "If Drifloon has a Pokémon Tool card attached to it, Drifloon's Retreat Cost is colorless colorless more.",
				fr: "Si Baudrive possède une carte Outil Pokémon, son Coût de retraite est de Colorless Colorless de plus.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Big Explosion",
				fr: "Grosse explosion",
			},
			effect: {
				en: "Drifloon does 50 damage to itself.",
				fr: "Baudrive s'inflige 50 dégâts.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],




}

export default card
