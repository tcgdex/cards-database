import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Nidoran♂",
		fr: "Nidoran♂",
		es: "Nidoran♂",
		it: "Nidoran♂",
		pt: "Nidoran♂",
		de: "Nidoran♂"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		32,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hit Back",
				fr: "Réplique",
			},
			effect: {
				en: "If this Pokémon has no damage counters on it, this attack does nothing.",
				fr: "Si ce Pokémon n'a aucun marqueur de dégâts, cette attaque ne fait rien.",
			},
			damage: 30,

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
