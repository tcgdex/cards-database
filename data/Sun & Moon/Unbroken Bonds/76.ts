import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Mew",
		fr: "Mew",
	},
	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		151,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Bench Barrier",
				fr: "Barrière de Banc",
			},
			effect: {
				en: "Prevent all damage done to your Benched Pokémon by your opponent's attacks.",
				fr: "Évitez tous les dégâts infligés à vos Pokémon de Banc par les attaques de votre adversaire.",
			},
		},
	],
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
