import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Nidoqueen",
		fr: "Nidoqueen",
	},
	illustrator: "PLANETA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		31,
	],
	hp: 140,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Nidorina",
		fr: "Nidorina",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				fr: "Offensive Ω",
			},
			effect: {
				fr: "Ce Pokémon peut attaquer deux fois par tour. (Si la première attaque met K.O. le Pokémon Actif de votre adversaire, vous pouvez encore attaquer après que votre adversaire a choisi un nouveau Pokémon Actif.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Poison Jab",
				fr: "Direct Toxik",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Dynamite Punch",
				fr: "Poing Dynamite",
			},
			effect: {
				en: "This Pokémon does 20 damage to itself. Don't apply Weakness to this damage.",
				fr: "Ce Pokémon s'inflige 20 dégâts. Ne pas appliquer la Faiblesse à ces dégâts.",
			},
			damage: 70,

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
