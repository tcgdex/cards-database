import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Vaporeon",
		fr: "Aquali",
	},
	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		134,
	],
	hp: 110,
	types: [
		"Water",
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
				en: "Vitality Cheer",
				fr: "Bravos Vivifiants",
			},
			effect: {
				en: "Your Pokémon-GX in play that evolve from Eevee get +60 HP. You can't apply more than 1 Vitality Cheer Ability at a time.",
				fr: "Vos Pokémon-GX en jeu qui évoluent d’Évoli ont +60 PV. Vous ne pouvez pas utiliser plus d’un talent Bravos Vivifiants à la fois.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Refreshing Rain",
				fr: "Ondée Rafraîchissante",
			},
			effect: {
				en: "Heal 30 damage from each of your Pokémon.",
				fr: "Soignez 30 dégâts à chacun de vos Pokémon.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
