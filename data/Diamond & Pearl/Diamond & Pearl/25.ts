import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Dustox",
		fr: "Papinox",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		269,
	],
	hp: 120,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Cascoon",
		fr: "Blindalys",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Stun Spore",
				fr: "Para-spore",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Toxic Dust",
				fr: "Poussière toxik",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Placez 2 marqueurs de dégât au lieu d'1 sur le Pokémon Défenseur entre deux tours.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	retreat: 2,



}

export default card
