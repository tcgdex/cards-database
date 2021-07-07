import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Drifblim",
		fr: "Grodrive",
	},
	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		426,
	],
	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Drifloon",
		fr: "Baudrive",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Eerie Wave",
				fr: "Vague Étrange",
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Burst Curse",
				fr: "Malédiction en Rafale",
			},
			effect: {
				en: "Discard 2 Energy attached to this Pokémon. Put 8 damage counters on your opponent’s Pokémon in any way you like.",
				fr: "Défaussez 2 Énergies attachées à ce Pokémon. Placez 8 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
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
