import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Wigglytuff",
		fr: "Grodoudou",
	},
	illustrator: "0313",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		40,
	],
	hp: 120,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Jigglypuff",
		fr: "Rondoudou",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hypnoblast",
				fr: "Hypnoblast",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Punishing Slap",
				fr: "Frappe Éprouvante",
			},
			effect: {
				en: "If any of your opponent's Pokémon have any Darkness Energy attached to them, this attack does 60 more damage.",
				fr: "Si de l’Énergie Darkness est attachée à l’un des Pokémon de votre adversaire, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
