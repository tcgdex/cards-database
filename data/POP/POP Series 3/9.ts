import { Card } from '../../../interfaces'
import Set from '../POP Series 3'

const card: Card = {
	name: {
		en: "Forretress",
		fr: "Foretress"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		205,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Toxic",
				fr: "Toxik"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Placez 2 marqueurs de dégât au lieu d'1 sur le Pokémon Défenseur entre deux tours."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire"
		},
	],

	retreat: 2,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 277457,
		tcgplayer: 85549
	}
}

export default card
