import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Crobat",
		fr: "Nostenfer"
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		169,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Golbat",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flutter Trick",
				fr: "Astuce-voltige"
			},
			effect: {
				en: "Flip a coin. If heads, look at your opponent's hand and choose 1 card. Your opponent discards the card you chose.",
				fr: "Lancez une pièce. Si c'est face, regardez la main de votre adversaire et choisissez 1 carte. Votre adversaire doit défausser cette carte."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Triple Poison",
				fr: "Triple Poison"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. Put 3 damage counters instead of 1 on the Defending Pokémon between turns.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Placez 3 marqueurs de dégât au lieu d'1 sur le Pokémon Défenseur entre deux tours."
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
