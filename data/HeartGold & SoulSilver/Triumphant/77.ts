import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Spoink",
		fr: "Spoink",
	},
	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		325,
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
				en: "Sleep Pearl",
				fr: "Perle dodo",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep. Switch Spoink with 1 of your Benched Pokémon.",
				fr: "Le Pokémon Défenseur est maintenant Endormi. Échangez Spoink avec l’un de vos Pokémon de Banc.",
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
