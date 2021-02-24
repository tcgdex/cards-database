import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Gardevoir",
		fr: "Gardevoir",
	},
	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		282,
	],
	hp: 110,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Kirlia",
		fr: "Kirlia",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Psychic Mirage",
				fr: "Mirage Psychique",
			},
			effect: {
				en: "Each basic Psychic Energy attached to your Psychic Pokémon provides PsychicPsychic Energy. You can't apply more than 1 Psychic Mirage Ability at a time.",
				fr: "Chaque Énergie Psychic de base attachée à vos Pokémon Psychic fournit de l'Énergie PsychicPsychic. Vous ne pouvez pas appliquer plus d'une capacité spéciale Mirage Psychique à la fois.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mind Shock",
				fr: "Choc Cérébral",
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
