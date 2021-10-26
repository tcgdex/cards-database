import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Sinistea",
		fr: "Théffroi",
		es: "Sinistea",
		it: "Sinistea",
		pt: "Sinistea",
		de: "Fatalitee"
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
				en: "Teatime",
				fr: "Thérémonie",
				es: "Hora del Té",
				it: "Ora del Tè",
				pt: "Hora do Chá",
				de: "Teatime"
			},
			effect: {
				en: "Each player draws 2 cards.",
				fr: "Chaque joueur pioche 2 cartes.",
				es: "Cada jugador roba 2 cartas.",
				it: "Ciascun giocatore pesca due carte.",
				pt: "Cada jogador compra 2 cartas.",
				de: "Jeder Spieler zieht 2 Karten."
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
		en: "This Pokémon is said to have been born when a lonely spirit possessed a cold, leftover cup of tea."
	},

	dexId: [854]
}

export default card
