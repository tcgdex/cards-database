import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Light Wigglytuff",
		'fr-fr': "Grodoudou lumineux",
		'de-de': "Helles Knuddeluff"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		40,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Jigglypuff",
		'fr-fr': "Rondoudou"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Evolution Song",
				'fr-fr': "Chant évolutionnaire",
				'de-de': "Evolution Song"
			},
			effect: {
				'en-us': "Your opponent may choose 1 of his or her Pokémon and search his or her deck for a card that evolves from that Pokémon. Your opponent attaches that card to that Pokémon. This counts as evolving that Pokémon. Either way, you may do the same, and then each player who searched shuffles his or her deck.",
				'fr-fr': "Votre adversaire peut choisir un de ses Pokémon et chercher dans son deck une carte Évolution de ce Pokémon. Votre adversaire attache cette carte à ce Pokémon. Quelle que soit sa décision, vous pouvez faire de même. Chaque joueur ayant cherché une carte mélange ensuite son deck.",
				'de-de': "Your opponent may choose 1 of his or her Pokémon and search his or her deck for a card that evolves from that Pokémon. Your opponent attaches that card to that Pokémon. This counts as evolving that Pokémon. Either way, you may do the same, and then each player who searched shuffles his or her deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Body Slam",
				'fr-fr': "Plaquage",
				'de-de': "Body Slam"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "If two of them brush against each other, they will not be able to separate themselves, as they enjoy touching each other's soft fur too much.",
		'fr-fr': "Si deux d'entre eux se frottent l'un contre l'autre, ils ne peuvent plus se séparer. Ils aiment trop sentir la douceur de la fourrure l'un de l'autre."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274706,
				tcgplayer: 86753
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274706,
				tcgplayer: 86753
			}
		}
	]
}

export default card
