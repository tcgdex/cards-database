import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Dustox",
		fr: "Papinox",
		de: "Pudox"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		269,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Cascoon",
		fr: "Blindalys"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Protective Dust",
				fr: "Poussière protectrice",
				de: "Protective Dust"
			},
			effect: {
				en: "Prevent all effects of attacks, except damage, done to Dustox by the Attacking Pokémon.",
				fr: "Prévenez tous les effets d'attaques, excepté les dégâts, infligés à Papinox par le Pokémon Attaquant.",
				de: "Prevent all effects of attacks, except damage, done to Dustox by the Attacking Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Toxic",
				fr: "Toxik",
				de: "Toxic"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Placez deux marqueurs de dégât sur le Pokémon Défenseur entre les deux tours.",
				de: "The Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on the defending Pokémon between turns."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gust",
				fr: "Tornade",
				de: "Gust"
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

	thirdParty: {
		cardmarket: 275654,
		tcgplayer: 85056
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		},
	]
}

export default card
