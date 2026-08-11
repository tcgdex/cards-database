import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Froakie",
		'fr-fr': "Grenousse",
		'es-es': "Froakie",
		'it-it': "Froakie",
		'pt-br': "Froakie",
		'de-de': "Froxy"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		656,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Bounce",
				'fr-fr': "Rebond",
				'es-es': "Bote",
				'it-it': "Rimbalzo",
				'pt-br': "Ricochete",
				'de-de': "Sprungfeder"
			},
			effect: {
				'en-us': "Flip a coin. If heads, switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
				'es-es': "Lanza 1 moneda. Si sale cara, cambia este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Lancia una moneta. Se esce testa, scambia questo Pokémon con uno della tua panchina.",
				'pt-br': "Jogue uma moeda. Se sair cara, troque este Pokémon por 1 dos seus Pokémon no Banco.",
				'de-de': "Wirf 1 Münze. Tausche bei \"Kopf\" dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
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

	retreat: 1,

	description: {
		'en-us': "It secretes flexible bubbles from its chest and back. The bubbles reduce the damage it would otherwise take when attacked.",
	},

	thirdParty: {
		cardmarket: 281376,
		tcgplayer: 85567
	}
}

export default card
