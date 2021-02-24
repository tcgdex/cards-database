import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Salazzle",
		fr: "Malamandre",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		758,
	],
	hp: 110,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Salandit",
		fr: "Tritox",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Panic Poison",
				fr: "Poison Panique",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Burned, Confused, and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé, Confus et Empoisonné.",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Hunter's Nails",
				fr: "Griffes du Chasseur",
			},
			effect: {
				en: "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 60 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
