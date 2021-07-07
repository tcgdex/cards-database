import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Duskull",
		fr: "Skelénox",
	},
	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		355,
	],
	hp: 50,
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
				en: "Revival",
				fr: "Réapparition",
			},
			effect: {
				en: "Put a Basic Pokémon from your opponent’s discard pile onto his or her Bench.",
				fr: "Prenez un Pokémon de base dans la pile de défausse de votre adversaire et placez-le sur son Banc.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Sneaky Placement",
				fr: "Placement Vicieux",
			},
			effect: {
				en: "Put 1 damage counter on your opponent’s Active Pokémon.",
				fr: "Placez un marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
