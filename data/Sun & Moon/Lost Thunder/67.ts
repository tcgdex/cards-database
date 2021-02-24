import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Primarina",
		fr: "Oratoria",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		730,
	],
	hp: 150,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Brionne",
		fr: "Otarlette",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Harmonics",
				fr: "Harmoniques",
			},
			effect: {
				en: "Whenever you attach an Energy card from your hand to 1 of your Pokémon, except with an attack, Ability, or Trainer card, attach up to 2 Energy cards to that Pokémon instead of 1.",
				fr: "Chaque fois que vous attachez une carte Énergie de votre main à l’un de vos Pokémon, excepté en raison d’une attaque, d’un talent ou d’une carte Dresseur, attachez jusqu’à 2 cartes Énergie à ce Pokémon-là au lieu d’une.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hypno Splash",
				fr: "Hypnoplouf",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
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

	retreat: 2,



}

export default card
