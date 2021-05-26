import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Toucannon",
		fr: "Bazoucan",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		733,
	],
	hp: 140,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Trumbeak",
		fr: "Piclairon",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Heat Beak",
				fr: "Bec Thermique",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Burned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Giganticannon",
				fr: "Gigantocanon",
			},
			effect: {
				en: "If this Pokémon evolved during this turn, this attack does nothing.",
				fr: "Si ce Pokémon a évolué pendant ce tour, cette attaque ne fait rien.",
			},
			damage: 160,

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
	retreat: 2,



}

export default card
