import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Gogoat",
		fr: "Chevroum",
	},
	illustrator: "You Iribi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		673,
	],
	hp: 120,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Skiddo",
		fr: "Cabriolaine",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sap Sipper",
				fr: "Herbivore",
			},
			effect: {
				en: "This Pokémon's attacks do 80 more damage to your opponent's Grass Pokémon (before applying Weakness and Resistance).",
				fr: "Les attaques de ce Pokémon infligent 80 dégâts supplémentaires aux Pokémon Grass de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Horn Leech",
				fr: "Encornebois",
			},
			effect: {
				en: "Heal 20 damage from this Pokémon.",
				fr: "Soignez 20 dégâts à ce Pokémon.",
			},
			damage: 80,

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
