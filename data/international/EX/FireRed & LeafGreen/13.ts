import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Rapidash",
		'fr-fr': "Galopa",
		'de-de': "Gallopa"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		78,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Ponyta",
		'fr-fr': "Ponyta"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Fiery Aura",
				'fr-fr': "Aura flamboyante",
				'de-de': "Fiery Aura"
			},
			effect: {
				'en-us': "As long as Rapidash is your Active Pokémon, put 4 damage counters instead of 2 on Burned Pokémon between turns.",
				'fr-fr': "Tant que Galopa est votre Pokémon Actif, placez 4 marqueurs de dégât au lieu de 2 sur les Pokémon Brûlés entre deux tours.",
				'de-de': "As long as Rapidash is your Active Pokémon, put 4 damage counters instead of 2 damage counters on Burned Pokémon between turns."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Searing Flame",
				'fr-fr': "Flammes calcinantes",
				'de-de': "Searing Flame"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "The Defending Pokémon is now Burned."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rear Kick",
				'fr-fr': "Ruade",
				'de-de': "Rear Kick"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276189,
				tcgplayer: 88581
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276189,
				tcgplayer: 88581
			},
		}
	]
}

export default card
