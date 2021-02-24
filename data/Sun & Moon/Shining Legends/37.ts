import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Arbok",
		fr: "Arbok",
	},
	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		24,
	],
	hp: 120,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Ekans",
		fr: "Abo",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Intimidating Pattern",
				fr: "Style Intimidant",
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your opponent's Active Pokémon's attacks do 30 less damage (before applying Weakness and Resistance).",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, les attaques du Pokémon Actif de votre adversaire infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Venomous Fang",
				fr: "Croc-Poison",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
