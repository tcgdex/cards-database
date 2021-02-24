import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Zygarde",
		fr: "Zygarde",
	},
	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		718,
	],
	hp: 90,
	types: [
		"Fightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Cellular Companions",
				fr: "Compères Cellulaires",
			},
			effect: {
				en: "As long as this Pokémon is on your Bench, your Zygarde's and Zygarde-GX's attacks do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
				fr: "Tant que ce Pokémon est sur votre Banc, les attaques de vos Zygarde et Zygarde-GX infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Boost Fang",
				fr: "Croc Boosté",
			},
			effect: {
				en: "Attach a Fighting Energy card from your discard pile to 1 of your Benched Pokémon.",
				fr: "Attachez une carte Énergie Fighting de votre pile de défausse à l’un de vos Pokémon de Banc.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
