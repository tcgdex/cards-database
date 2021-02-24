import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Deoxys",
		fr: "Deoxys",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		386,
	],
	hp: 100,
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
				en: "Teleportation Burst",
				fr: "Téléportation Explosive",
			},
			effect: {
				en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Vous pouvez échanger ce Pokémon avec l’un de vos Pokémon de Banc.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spear Dive",
				fr: "Lance Plongeante",
			},
			effect: {
				en: "This attack does 50 damage to 1 of your opponent's Pokémon. This damage isn't affected by Weakness or Resistance.",
				fr: "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
