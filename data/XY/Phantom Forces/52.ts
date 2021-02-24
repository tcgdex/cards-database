import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Honchkrow",
		fr: "Corboss",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		430,
	],
	hp: 100,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Murkrow",
		fr: "Cornèbre",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Hypnoblast",
				fr: "Hypnoblast",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Nightmare Mambo",
				fr: "Valse Hantée",
			},
			effect: {
				en: "If your opponent's Active Pokémon is Asleep, this attack does 60 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est Endormi, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 60,

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
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
