import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Dustox",
		'fr-fr': "Papinox",
		'de-de': "Pudox"
	},

	illustrator: "Midori Harada",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [269],

	hp: 90,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Cascoon",
		'fr-fr': "Blindalys"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Protective Dust",
				'fr-fr': "Poussière protectrice",
				'de-de': "Protective Dust"
			},
			effect: {
				'en-us': "Prevent all effects of attacks, except damage, done to Dustox by the Attacking Pokémon.",
				'fr-fr': "Prévenez tous les effets d'attaques, excepté les dégâts, infligés à Papinox par le Pokémon Attaquant.",
				'de-de': "Prevent all effects of attacks, except damage, done to Dustox by the Attacking Pokémon."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Toxic",
				'fr-fr': "Toxik",
				'de-de': "Toxic"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné. Placez deux marqueurs de dégât sur le Pokémon Défenseur entre les deux tours.",
				'de-de': "The Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on the defending Pokémon between turns."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gust",
				'fr-fr': "Tornade",
				'de-de': "Gust"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 0,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275654,
				tcgplayer: 85056
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275654,
				tcgplayer: 85056
			}
		},
	],

}

export default card
