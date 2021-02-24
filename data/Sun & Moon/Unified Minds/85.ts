import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Azelf",
		fr: "Créfadet",
	},
	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		482,
	],
	hp: 70,
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
				en: "Psypower",
				fr: "Puissance Psy",
			},
			effect: {
				en: "Put 3 damage counters on your opponent's Pokémon in any way you like.",
				fr: "Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
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
