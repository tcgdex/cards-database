import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Shuppet",
		'fr-fr': "Polichombr",
		'de-de': "Shuppet"
	},

	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [353],

	hp: 50,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Hypnosis",
				'fr-fr': "Hypnose",
				'de-de': "Hypnosis"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "The Defending Pokémon is now Asleep."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Night Attack",
				'fr-fr': "Attaque nocturne",
				'de-de': "Night Attack"
			},
			effect: {
				'en-us': "Put 1 damage counter on 1 of your opponent's Pokémon.",
				'fr-fr': "Placez un marqueur de dégât sur un des Pokémon de votre adversaire.",
				'de-de': "Put 1 damage counter on 1 of your opponent's Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89195,
				cardmarket: 275920
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89195,
				cardmarket: 275920
			},
		},
	],

}

export default card
