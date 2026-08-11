import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [257],

	name: {
		'en-us': "Blaziken",
		'fr-fr': "Braségali",
		'es-es': "Blaziken",
		'it-it': "Blaziken",
		'pt-br': "Blaziken",
		'de-de': "Lohgock"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 170,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Combusken",
		'fr-fr': "Galifeu",
		'es-es': "Combusken",
		'it-it': "Combusken",
		'pt-br': "Combusken",
		'de-de': "Jungglut"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Double Type",
				'fr-fr': "Type Double",
				'es-es': "Doble Tipo",
				'it-it': "Doppio Tipo",
				'pt-br': "Tipo Duplo",
				'de-de': "Doppeltyp"
			},
			effect: {
				'en-us': "As long as this Pokémon is in play, it is Fire and Fighting type.",
				'fr-fr': "Tant que ce Pokémon est en jeu, il est de type Fire et Fighting.",
				'es-es': "Mientras este Pokémon esté en juego, es de tipo Fire y Fighting.",
				'it-it': "Fintanto che questo Pokémon è in gioco, è di tipo Fire e Fighting.",
				'pt-br': "Enquanto este Pokémon estiver em jogo, será um Pokémon de tipo Fire e Fighting.",
				'de-de': "Solange dieses Pokémon im Spiel ist, ist es vom Typ Fire und Fighting."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Turbo Drive",
				'fr-fr': "Propulsion Turbo",
				'es-es': "Turboimpulso",
				'it-it': "Modulo Turbo",
				'pt-br': "Unidade Turbo",
				'de-de': "Turboantrieb"
			},
			effect: {
				'en-us': "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
				'fr-fr': "Attachez une carte Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
				'es-es': "Une 1 carta de Energía Básica de tu pila de descartes a 1 de tus Pokémon en Banca.",
				'it-it': "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base dalla tua pila degli scarti.",
				'pt-br': "Ligue 1 carta de Energia básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				'de-de': "Lege 1 Basis-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Stage2",

	description: {
		'en-us': "When facing a tough foe, it looses flames from its wrists. Its powerful legs let it jump clear over buildings."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 482994,
				tcgplayer: 219237
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 482994,
				tcgplayer: 219237
			}
		},
	],
}

export default card
