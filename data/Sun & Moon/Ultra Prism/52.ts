import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Drifblim",
		fr: "Grodrive",
	},
	illustrator: "Yumi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		426,
	],
	hp: 110,
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
				en: "Damage Transport",
				fr: "Transport de Dégâts",
			},
			effect: {
				en: "Move 4 damage counters from each of your Pokémon to your opponent's Active Pokémon.",
				fr: "Déplacez 4 marqueurs de dégâts de chacun de vos Pokémon vers le Pokémon Actif de votre adversaire.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wind Wheel",
				fr: "Roue Éolienne",
			},
			effect: {
				en: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
				fr: "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
