import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Deino",
		fr: "Solochi",
	},
	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		633,
	],
	hp: 60,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Roar",
				fr: "Hurlement",
			},
			effect: {
				en: "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
			},

		},
		{
			cost: [
				"Psychic",
				"Darkness",
			],
			name: {
				en: "Headbutt Bounce",
				fr: "Culbute Surprise",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
