import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Solgaleo",
		fr: "Solgaleo",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		791,
	],
	hp: 160,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Cosmoem",
		fr: "Cosmovum",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Full Metal Body",
				fr: "Métallo-Garde",
			},
			effect: {
				en: "If this Pokémon has any Metal Energy attached to it, it has no Weakness.",
				fr: "Si de l’Énergie Metal est attachée à ce Pokémon, il n’a pas de Faiblesse.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Rising Dash",
				fr: "Ruée Ascendante",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			},
			damage: 130,

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
	retreat: 3,



}

export default card
