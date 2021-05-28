import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Meditite",
		fr: "Méditikka",
	},
	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		307,
	],
	hp: 60,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Spirited Headbutt",
				fr: "Coup d’Boule Emporté",
			},
			effect: {
				en: "This Pokémon can't use Spirited Headbutt during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Coup d’Boule Emporté pendant votre prochain tour.",
			},
			damage: 40,

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
