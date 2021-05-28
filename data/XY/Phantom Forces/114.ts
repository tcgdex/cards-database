import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Gengar-EX",
		fr: "Ectoplasma-EX",
	},
	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		94,
	],
	hp: 170,
	types: [
		"Psychic",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Night Attack",
				fr: "Attaque Nocturne",
			},
			effect: {
				en: "Put 3 damage counters on 1 of your opponent's Pokémon.",
				fr: "Placez 3 marqueurs de dégâts sur l'un des Pokémon de votre adversaire.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dark Corridor",
				fr: "Couloir Ténébreux",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned. Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
			},
			damage: 60,

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
	retreat: 2,



}

export default card
