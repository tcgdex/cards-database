import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Staraptor",
		fr: "Étouraptor",
	},
	illustrator: "Sekio",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		398,
	],
	hp: 140,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Staravia",
		fr: "Étourvol",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Clutch",
				fr: "Serre",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 50,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sky Hunting",
				fr: "Chasse Aérienne",
			},
			effect: {
				en: "If your opponent's Pokémon is Knocked Out by the damage from this attack, switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts de cette attaque, échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
