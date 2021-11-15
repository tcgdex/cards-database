import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Hitmontop",
		fr: "Kapoera"
	},
	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		237,
	],
	hp: 70,
	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Stages of Evolution",
				fr: "Niveaux d'Évolution"
			},
			effect: {
				en: "As long as Hitmontop is an Evolved Pokémon, is your Active Pokémon, and is damaged by an opponent's attack (even if Hitmontop is Knocked Out), put 2 damage counters on the Attacking Pokémon.",
				fr: "Tant que Kapoera est un Pokémon Évolué et votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Kapoera est mis K.O), placez 2 marqueurs de dégât sur le Pokémon Attaquant."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Upward Kick",
				fr: "Coup'd pied au menton"
			},
			effect: {
				en: "If the Defending Pokémon already has at least 2 damage counters on it, this attack does 20 damage plus 30 more damage.",
				fr: "Si le Pokémon Défenseur possède déjà au moins 2 marqueurs de dégât, cette attaque inflige 20 dégâts plus 30 dégâts supplémentaires."
			},
			damage: "20+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spiral Kick",
				fr: "Coup'd pied en spirale"
			},
			effect: {
				en: "n/a",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
