import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Drapion",
		fr: "Drascore",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		452,
	],
	hp: 100,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Skorupi",
		fr: "Rapion",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Toxic Fang",
				fr: "Croc toxik",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on that Pokémon between turns.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné. Placez 2 marqueurs de dégât au lieu d'un seul sur ce Pokémon entre deux tours.",
			},
			damage: 40,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Land Crush",
				fr: "Écras'terre",
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
