import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Alolan Dugtrio",
		fr: "Triopikeur d’Alola",
	},
	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		51,
	],
	hp: 100,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Alolan Diglett",
		fr: "Taupiqueur d’Alola",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Tangling Hair",
				fr: "Mèche Rebelle",
			},
			effect: {
				en: "Your opponent's Active Pokémon's Retreat Cost is Colorless more.",
				fr: "Le Coût de Retraite du Pokémon Actif de votre adversaire est augmenté de Colorless.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dig Under",
				fr: "Terrassement",
			},
			effect: {
				en: "This attack does 50 damage to 1 of your opponent's Pokémon. This damage isn't affected by Weakness or Resistance.",
				fr: "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
