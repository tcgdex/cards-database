import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Sinistea",
		'fr-fr': "Théffroi",
		'es-es': "Sinistea",
		'it-it': "Sinistea",
		'pt-br': "Sinistea",
		'de-de': "Fatalitee"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 30,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Teatime",
				'fr-fr': "Thérémonie",
				'es-es': "Hora del Té",
				'it-it': "Ora del Tè",
				'pt-br': "Hora do Chá",
				'de-de': "Teatime"
			},
			effect: {
				'en-us': "Each player draws 2 cards.",
				'fr-fr': "Chaque joueur pioche 2 cartes.",
				'es-es': "Cada jugador roba 2 cartas.",
				'it-it': "Ciascun giocatore pesca due carte.",
				'pt-br': "Cada jogador compra 2 cartas.",
				'de-de': "Jeder Spieler zieht 2 Karten."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
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
		'en-us': "This Pokémon is said to have been born when a lonely spirit possessed a cold, leftover cup of tea."
	},

	dexId: [854],

	thirdParty: {
		cardmarket: 436569,
		tcgplayer: 208398
	}
}

export default card
