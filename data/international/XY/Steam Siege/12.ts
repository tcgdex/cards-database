import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Foongus",
		'fr-fr': "Trompignon",
		'es-es': "Foongus",
		'it-it': "Foongus",
		'pt-br': "Foongus",
		'de-de': "Tarnpignon"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		590,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Play Ball",
				'fr-fr': "Jeu de Ballon",
				'es-es': "Sacar Poké Balls",
				'it-it': "Giocasfera",
				'pt-br': "Jogar Bola",
				'de-de': "Ballspiel"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand onto your Bench, you may put 3 Poké Ball cards from your discard pile into your hand.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez ajouter 3 cartes Poké Ball de votre pile de défausse à votre main.",
				'es-es': "Cuando juegues este Pokémon de tu mano a tu Banca, puedes poner 3 cartas de Poké Ball de tu pila de descartes en tu mano.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina, puoi prendere tre carte Poké Ball dalla tua pila degli scarti e aggiungerle alle carte che hai in mano.",
				'pt-br': "Ao jogar este Pokémon da sua mão para o seu Banco, você pode colocar 3 cards de Poké Ball da sua pilha de descarte na sua mão.",
				'de-de': "Wenn du dieses Pokémon von deiner Hand spielst und auf deine Bank legst, kannst du 3 Pokéball-Karten von deinem Ablagestapel auf deine Hand nehmen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'es-es': "Apisonar",
				'it-it': "Carica",
				'pt-br': "Aríete",
				'de-de': "Ramme"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It lures Pokémon with its pattern that looks just like a Poké Ball then releases poison spores.",
	},

	thirdParty: {
		cardmarket: 291519,
		tcgplayer: 121001
	}
}

export default card
