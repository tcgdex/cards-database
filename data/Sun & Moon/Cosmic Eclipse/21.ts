import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Buzzwole",
		fr: "Mouscoto",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		794,
	],
	hp: 130,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Beast Boost",
				fr: "Boost Chimère",
			},
			effect: {
				en: "This Pokémon's attacks do 20 more damage to your opponent's Active Pokémon for each Prize card you have taken (before applying Weakness and Resistance).",
				fr: "Pour chaque carte Récompense que vous avez récupérée, les attaques de ce Pokémon infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Touchdown",
				fr: "Touchdown",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
