import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Carbink BREAK",
		fr: "Strassie TURBO",
		es: "Carbink TURBO",
		it: "Carbink TURBO",
		pt: "Carbink TURBO",
		de: "Rocara-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		703,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Carbink",
		fr: "Strassie",
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Diamond Gift",
				fr: "Cadeau de Diamant",
				es: "Regalo Diamante",
				it: "Dono Diamante",
				pt: "Presente de Diamante",
				de: "Diamantgeschenk"
			},
			effect: {
				en: "Attach 2 Energy cards from your discard pile to 1 of your Fighting Pokémon.",
				fr: "Attachez 2 cartes Énergie de votre pile de défausse à l'un de vos Pokémon Fighting.",
				es: "Une 2 cartas de Energía de tu pila de descartes a 1 de tus Pokémon Fighting.",
				it: "Assegna a uno dei tuoi Pokémon Fighting due carte Energia dalla tua pila degli scarti.",
				pt: "Ligue 2 cards de Energia da sua pilha de descarte a 1 dos seus Pokémon Fighting.",
				de: "Lege 2 Energiekarten aus deinem Ablagestapel an 1 deiner Fighting-Pokémon an."
			},
			damage: 20,

		}
	],

	retreat: 0
}

export default card
