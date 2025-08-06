import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Tornadus",
		fr: "Boréas",
		es: "Tornadus",
		it: "Tornadus",
		pt: "Tornadus",
		de: "Boreos"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		641,
	],

	hp: 110,

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
				en: "Energy Wheel",
				fr: "Roue d'Énergie",
			},
			effect: {
				en: "Move an Energy from 1 of your Benched Pokémon to this Pokémon.",
				fr: "Déplacez une Énergie de l'un de vos Pokémon de Banc vers ce Pokémon.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hurricane",
				fr: "Vent Violent",
			},
			effect: {
				en: "Move a basic Energy from this Pokémon to 1 of your Benched Pokémon.",
				fr: "Déplacez une Énergie de base de ce Pokémon vers 1 de vos Pokémon de Banc.",
			},
			damage: 80,

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

	retreat: 1,

	thirdParty: {
		cardmarket: 280054,
		tcgplayer: 89977
	}
}

export default card
