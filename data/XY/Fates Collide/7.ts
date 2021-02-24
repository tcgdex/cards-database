import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Serperior",
		fr: "Majaspic",
	},
	illustrator: "You Iribi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		497,
	],
	hp: 140,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Servine",
		fr: "Lianaja",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Coil",
				fr: "Enroulement",
			},
			effect: {
				en: "During your next turn, this Pokémon's attacks do 60 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, les attaques de ce Pokémon infligent 60 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 40,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Slashing Strike",
				fr: "Coup Déchirant",
			},
			effect: {
				en: "This Pokémon can't use Slashing Strike during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Coup Déchirant pendant votre prochain tour.",
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
