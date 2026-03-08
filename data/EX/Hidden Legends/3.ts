import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Crobat",
		fr: "Nostenfer",
		de: "Iksbat"
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
		fr: "Nosferalto"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flutter Trick",
				fr: "Astuce-voltige",
				de: "Flutter Trick"
			},
			effect: {
				en: "Flip a coin. If heads, look at your opponent's hand and choose 1 card. Your opponent discards the card you chose.",
				fr: "Lancez une pièce. Si c'est face, regardez la main de votre adversaire et choisissez 1 carte. Votre adversaire doit défausser cette carte.",
				de: "Flip a coin. If heads, look at your opponent's hand and choose 1 card. Your opponent discards the card you chose."
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
				fr: "Triple Poison",
				de: "Triple Poison"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. Put 3 damage counters instead of 1 on the Defending Pokémon between turns.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Placez 3 marqueurs de dégât au lieu d'1 sur le Pokémon Défenseur entre deux tours.",
				de: "The Defending Pokémon is now Poisoned. Put 3 damage counters instead of 1 on the Defending Pokémon between turns."
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

	
	retreat: 0,

	thirdParty: {
		cardmarket: 276077,
		tcgplayer: 84486
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
