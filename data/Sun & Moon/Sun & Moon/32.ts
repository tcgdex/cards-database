import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Poliwrath",
		fr: "Tartard",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		62,
	],
	hp: 150,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Poliwhirl",
		fr: "Têtarte",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Split Spiral Punch",
				fr: "Coup d’Poing en Demi Spirale",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wake-Up Slap",
				fr: "Réveil Forcé",
			},
			effect: {
				en: "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 80 more damage. Then, remove all Special Conditions from that Pokémon.",
				fr: "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige 80 dégâts supplémentaires. Retirez ensuite tous les États Spéciaux de ce Pokémon.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
