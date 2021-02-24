import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Glameow",
		fr: "Chaglam",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		431,
	],
	hp: 50,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Captivate",
				fr: "Séduction",
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon.",
				fr: "Échangez 1 des Pokémon de Banc de votre adversaire avec 1 des Pokémon Défenseurs.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
