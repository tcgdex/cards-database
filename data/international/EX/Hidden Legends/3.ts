import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Crobat",
		'fr-fr': "Nostenfer",
		'de-de': "Iksbat"
	},

	illustrator: "Midori Harada",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [169],

	hp: 90,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Golbat",
		'fr-fr': "Nosferalto"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Flutter Trick",
				'fr-fr': "Astuce-voltige",
				'de-de': "Flutter Trick"
			},
			effect: {
				'en-us': "Flip a coin. If heads, look at your opponent's hand and choose 1 card. Your opponent discards the card you chose.",
				'fr-fr': "Lancez une pièce. Si c'est face, regardez la main de votre adversaire et choisissez 1 carte. Votre adversaire doit défausser cette carte.",
				'de-de': "Flip a coin. If heads, look at your opponent's hand and choose 1 card. Your opponent discards the card you chose."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Triple Poison",
				'fr-fr': "Triple Poison",
				'de-de': "Triple Poison"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned. Put 3 damage counters instead of 1 on the Defending Pokémon between turns.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné. Placez 3 marqueurs de dégât au lieu d'1 sur le Pokémon Défenseur entre deux tours.",
				'de-de': "The Defending Pokémon is now Poisoned. Put 3 damage counters instead of 1 on the Defending Pokémon between turns."
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

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84486,
				cardmarket: 276077
			}
		},
		{
			type: "reverse",
			foil: 'energy',
			thirdParty: {
				tcgplayer: 84486,
				cardmarket: 276077
			}
		},
	]
}

export default card
