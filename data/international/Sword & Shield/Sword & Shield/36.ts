import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Cinderace",
		'fr-fr': "Pyrobut",
		'es-es': "Cinderace",
		'it-it': "Cinderace",
		'pt-br': "Cinderace",
		'de-de': "Liberlo"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 170,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Raboot",
		'fr-fr': "Lapyro",
		'es-es': "Raboot",
		'it-it': "Raboot",
		'pt-br': "Raboot",
		'de-de': "Kickerlo"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Flame Cloak",
				'fr-fr': "Manteau de Feu",
				'es-es': "Manto Ígneo",
				'it-it': "Radunafuoco",
				'pt-br': "Manto de Chamas",
				'de-de': "Flammenumhang"
			},
			effect: {
				'en-us': "Attach a Fire Energy card from your discard pile to this Pokémon.",
				'fr-fr': "Attachez une carte Énergie Fire de votre pile de défausse à ce Pokémon.",
				'es-es': "Une 1 carta de Energía Fire de tu pila de descartes a este Pokémon.",
				'it-it': "Assegna a questo Pokémon una carta Energia Fire dalla tua pila degli scarti.",
				'pt-br': "Ligue 1 carta de Energia Fire da sua pilha de descarte a este Pokémon.",
				'de-de': "Lege 1 Fire-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
			},
			damage: 40,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Bright Flame",
				'fr-fr': "Flamme Éclatante",
				'es-es': "Llama Viva",
				'it-it': "Splendifiamma",
				'pt-br': "Chama Reluzente",
				'de-de': "Helle Flamme"
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard 2 Energy from this Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est pile, défaussez 2 Énergies de ce Pokémon.",
				'es-es': "Lanza 1 moneda. Si sale cruz, descarta 2 Energías de este Pokémon.",
				'it-it': "Lancia una moneta. Se esce croce, scarta due Energie da questo Pokémon.",
				'pt-br': "Jogue 1 moeda. Se sair coroa, descarte 2 Energias deste Pokémon.",
				'de-de': "Wirf 1 Münze. Lege bei Zahl 2 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 160,

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

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "It juggles a pebble with its feet, turning it into a burning soccer ball. Its shots strike opponents hard and leave them scorched."
	},

	dexId: [815],

	thirdParty: {
		cardmarket: 427226,
		tcgplayer: 208314
	}
}

export default card
