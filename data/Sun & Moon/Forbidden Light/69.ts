import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Tyrantrum",
		fr: "Rexillius",
	},
	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		697,
	],
	hp: 160,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Tyrunt",
		fr: "Ptyranidur",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Tyrannical Heart",
				fr: "Cœur Tyrannique",
			},
			effect: {
				en: "As long as you don't have more Pokémon in play than your opponent, this Pokémon's attacks do 60 more damage (before applying Weakness and Resistance), and it takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Tant que vous n’avez pas plus de Pokémon en jeu que votre adversaire, les attaques de ce Pokémon infligent 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance), et il subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Crunch",
				fr: "Mâchouille",
			},
			effect: {
				en: "Discard an Energy from your opponent's Active Pokémon.",
				fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
