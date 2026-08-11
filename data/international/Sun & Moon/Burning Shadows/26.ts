import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Turtonator",
		'fr-fr': "Boumata",
		'es-es': "Turtonator",
		'it-it': "Turtonator",
		'pt-br': "Turtonator",
		'de-de': "Tortunator"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		776,
	],

	hp: 130,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
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
				'fr-fr': "Attachez une carte Énergie Fire de votre pile de défausse à ce Pokémon.",
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
				"Colorless",
			],
			name: {
				'en-us': "Heat Blast",
				'fr-fr': "Explosion de Chaleur",
				'es-es': "Explosión de Calor",
				'it-it': "Caldobomba",
				'pt-br': "Raio de Calor",
				'de-de': "Hitzestoß"
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

	retreat: 3,

	description: {
		'en-us': "The shell on its back is chemically unstable and explodes violently if struck. The hole in its stomach is its weak point.",
	},

	thirdParty: {
		cardmarket: 299432,
		tcgplayer: 138506
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
