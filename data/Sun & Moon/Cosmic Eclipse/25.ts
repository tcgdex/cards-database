import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Flareon",
		fr: "Pyroli",
	},
	illustrator: "AKIRA EGAWA",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		136,
	],
	hp: 110,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Power Cheer",
				fr: "Bravos Puissants",
			},
			effect: {
				en: "The attacks of your Pokémon-GX in play that evolve from Eevee do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance). You can't apply more than 1 Power Cheer Ability at a time.",
				fr: "Les attaques de vos Pokémon-GX en jeu qui évoluent d’Évoli infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance). Vous ne pouvez pas utiliser plus d’un talent Bravos Puissants à la fois.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-Flammes",
			},
			effect: {
				en: "Discard an Energy from this Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
