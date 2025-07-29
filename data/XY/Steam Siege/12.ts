import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Foongus",
		fr: "Trompignon",
		es: "Foongus",
		it: "Foongus",
		pt: "Foongus",
		de: "Tarnpignon"
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
				en: "Play Ball",
				fr: "Jeu de Ballon",
				es: "Sacar Poké Balls",
				it: "Giocasfera",
				pt: "Jogar Bola",
				de: "Ballspiel"
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench, you may put 3 Poké Ball cards from your discard pile into your hand.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez ajouter 3 cartes Poké Ball de votre pile de défausse à votre main.",
				es: "Cuando juegues este Pokémon de tu mano a tu Banca, puedes poner 3 cartas de Poké Ball de tu pila de descartes en tu mano.",
				it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina, puoi prendere tre carte Poké Ball dalla tua pila degli scarti e aggiungerle alle carte che hai in mano.",
				pt: "Ao jogar este Pokémon da sua mão para o seu Banco, você pode colocar 3 cards de Poké Ball da sua pilha de descarte na sua mão.",
				de: "Wenn du dieses Pokémon von deiner Hand spielst und auf deine Bank legst, kannst du 3 Pokéball-Karten von deinem Ablagestapel auf deine Hand nehmen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Ram",
				fr: "Collision",
				es: "Apisonar",
				it: "Carica",
				pt: "Aríete",
				de: "Ramme"
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

	thirdParty: {
		cardmarket: 291519
	}
}

export default card
