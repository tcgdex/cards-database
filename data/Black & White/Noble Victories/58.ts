import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Litwick",
		fr: "Funécire",
		es: "Litwick",
		it: "Litwick",
		pt: "Litwick",
		de: "Lichtel"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		607,
	],

	hp: 50,

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
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "While shining a light and pretending to be a guide, it leaches off the life force of any who follow it.",
	},

	thirdParty: {
		cardmarket: 280181,
		tcgplayer: 86809
	}
}

export default card
