import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Dartrix",
		fr: "Efflèche",
	},
	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		723,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Rowlet",
		fr: "Brindibou",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Leafage",
				fr: "Feuillage",
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wing Flick",
				fr: "Battement d’Aile",
			},
			effect: {
				en: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
				fr: "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
