import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Drilbur",
		'fr-fr': "Rototaupe",
		'es-es': "Drilbur",
		'it-it': "Drilbur",
		'pt-br': "Drilbur",
		'de-de': "Rotomurf"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		529,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
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
				'en-us': "Shuffle a card from your discard pile into your deck.",
				'fr-fr': "Mélangez une carte de votre pile de défausse avec votre deck.",
				'es-es': "Pon 1 carta de tu pila de descartes en tu baraja y baraja todas las cartas.",
				'it-it': "Rimischia una carta dalla tua pila degli scarti nel tuo mazzo.",
				'pt-br': "Embaralhe 1 carta da sua pilha de descarte no seu baralho.",
				'de-de': "Mische 1 Karte aus deinem Ablagestapel in dein Deck."
			},

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Mud-Slap",
				'fr-fr': "Coud’Boue",
				'es-es': "Bofetón Lodo",
				'it-it': "Fangosberla",
				'pt-br': "Tapa de Lama",
				'de-de': "Lehmschelle"
			},

			damage: 10,

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
		'en-us': "It makes its way swiftly through the soil by putting both claws together and rotating at high speed.",
	},

	thirdParty: {
		cardmarket: 408219,
		tcgplayer: 201146
	}
}

export default card
