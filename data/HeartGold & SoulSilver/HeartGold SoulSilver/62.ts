import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Drowzee",
		fr: "Soporifik",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		96,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Sleep Inducer",
				fr: "Poussododo",
			},
			effect: {
				en: "Switch the Defending Pokémon with 1 of your opponent’s Benched Pokémon. The new Defending Pokémon is now Asleep.",
				fr: "Échangez le Pokémon Défenseur avec un Pokémon du Banc de votre adversaire. Le nouveau Pokémon Défenseur est maintenant Endormi.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gentle Slap",
				fr: "Gifle douce",
			},

			damage: 20,

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
