import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Musharna",
		fr: "Mushana",
	},
	illustrator: "MAHOU",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 120,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Munna",
		fr: "Munna",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sleepy Pulse",
				fr: "Pouls Léthargique",
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep. During Pokémon Checkup, your opponent flips 2 coins instead of 1. If either of them is tails, that Pokémon is still Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi. Pendant le Contrôle Pokémon, votre adversaire lance 2 pièces au lieu d’une. S’il obtient au moins un côté pile, ce Pokémon-là reste Endormi.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Super Hypnoblast",
				fr: "Super Hypno-Rafale",
			},
			effect: {
				en: "If your opponent’s Active Pokémon is Asleep, this attack does 120 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est Endormi, cette attaque inflige 120 dégâts supplémentaires.",
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 3,



}

export default card
