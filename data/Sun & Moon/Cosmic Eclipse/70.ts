import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Jolteon",
		fr: "Voltali",
	},
	illustrator: "Uta",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		135,
	],
	hp: 100,
	types: [
		"Lightning",
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
				en: "Speed Cheer",
				fr: "Bravos Fulgurants",
			},
			effect: {
				en: "The attacks of your Pokémon-GX in play that evolve from Eevee cost Colorless less. You can't apply more than 1 Speed Cheer Ability at a time.",
				fr: "Les attaques de vos Pokémon-GX en jeu qui évoluent d’Évoli coûtent Colorless de moins. Vous ne pouvez pas utiliser plus d’un talent Bravos Fulgurants à la fois.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Head Bolt",
				fr: "Éclair Frontal",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
