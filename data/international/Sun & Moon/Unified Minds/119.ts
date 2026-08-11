import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Excadrill",
		'fr-fr': "Minotaupe",
		'es-es': "Excadrill",
		'it-it': "Excadrill",
		'pt-br': "Excadrill",
		'de-de': "Stalobor"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		530,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Drilbur",
		'fr-fr': "Rototaupe",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Rototiller",
				'fr-fr': "Fertilisation",
				'es-es': "Fertilizante",
				'it-it': "Aracampo",
				'pt-br': "Rototiller",
				'de-de': "Pflüger"
			},
			effect: {
				'en-us': "Shuffle 4 cards from your discard pile into your deck.",
				'fr-fr': "Mélangez 4 cartes de votre pile de défausse avec votre deck.",
				'es-es': "Pon 4 cartas de tu pila de descartes en tu baraja y baraja todas las cartas.",
				'it-it': "Rimischia quattro carte dalla tua pila degli scarti nel tuo mazzo.",
				'pt-br': "Embaralhe 4 cartas da sua pilha de descarte no seu baralho.",
				'de-de': "Mische 4 Karten aus deinem Ablagestapel in dein Deck."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'es-es': "Cuchillada",
				'it-it': "Lacerazione",
				'pt-br': "Talho",
				'de-de': "Schlitzer"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It can help in tunnel construction. Its drill has evolved into steel strong enough to bore through iron plates.",
	},

	thirdParty: {
		cardmarket: 388397,
		tcgplayer: 195074
	}
}

export default card
