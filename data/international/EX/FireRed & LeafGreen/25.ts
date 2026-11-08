import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Hypno",
		'fr-fr': "Hypnomade",
		'de-de': "Hypno"
	},

	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		97,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Drowsee",
		'fr-fr': "Soporifik"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Eerie Aura",
				'fr-fr': "Aura sinistre",
				'de-de': "Eerie Aura"
			},
			effect: {
				'en-us': "As long as Hypno is your Active Pokémon, put 2 damage counters on each Pokémon that remains Asleep between turns.",
				'fr-fr': "Tant qu'Hypnomade est votre Pokémon Actif, placez 2 marqueurs de dégât sur chaque Pokémon qui reste Endormi entre deux tours.",
				'de-de': "As long as Hypno is your Active Pokémon, put 2 damage counters on each Pokémon that remains Asleep between turns."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Hypnotic Ray",
				'fr-fr': "Onde hypnotique",
				'de-de': "Hypnotic Ray"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "The Defending Pokémon is now Asleep."
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

	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276201,
				tcgplayer: 86252
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276201,
				tcgplayer: 86252
			},
		}
	]
}

export default card
