import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Scrafty",
		fr: "Baggaïd",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		560,
	],
	hp: 110,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Scraggy",
		fr: "Baggiguane",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dangerous Head",
				fr: "Tête Dangereuse",
			},
			effect: {
				en: "If your opponent's Active Pokémon is a Basic Pokémon, this attack does 50 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon de base, cette attaque inflige 50 dégâts supplémentaires.",
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncement",
			},

			damage: 90,

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
	retreat: 2,



}

export default card
