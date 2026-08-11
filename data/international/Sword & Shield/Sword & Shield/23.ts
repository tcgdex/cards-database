import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Ninetales",
		'fr-fr': "Feunard",
		'es-es': "Ninetales",
		'it-it': "Ninetales",
		'pt-br': "Ninetales",
		'de-de': "Vulnona"
	},

	illustrator: "Megumi Higuchi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		38,
	],

	hp: 120,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Vulpix",
		'fr-fr': "Goupix",
		'es-es': "Vulpix",
		'it-it': "Vulpix",
		'pt-br': "Vulpix",
		'de-de': "Vulpix"
	},

	stage: "Stage1",

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
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Fire Mane",
				'fr-fr': "Crinière de Feu",
				'es-es': "Crin de Fuego",
				'it-it': "Criniera di Fuoco",
				'pt-br': "Crina de Fogo",
				'de-de': "Flammenmähne"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "It is said to live 1,000 years, and each of its tails is loaded with supernatural powers."
	},

	thirdParty: {
		cardmarket: 436284,
		tcgplayer: 208302
	}
}

export default card
