import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Blaziken",
		fr: "Braségali",
		es: "Blaziken",
		it: "Blaziken",
		pt: "Blaziken",
		de: "Lohgock"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 170,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Combusken",
		fr: "Galifeu",
		es: "Combusken",
		it: "Combusken",
		pt: "Combusken",
		de: "Jungglut"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Double Type",
				fr: "Type Double",
				es: "Doble Tipo",
				it: "Doppio Tipo",
				pt: "Tipo Duplo",
				de: "Doppeltyp"
			},
			effect: {
				en: "As long as this Pokémon is in play, it is Fire and Fighting type.",
				fr: "Tant que ce Pokémon est en jeu, il est de type Fire et Fighting.",
				es: "Mientras este Pokémon esté en juego, es de tipo Fire y Fighting.",
				it: "Fintanto che questo Pokémon è in gioco, è di tipo Fire e Fighting.",
				pt: "Enquanto este Pokémon estiver em jogo, será um Pokémon de tipo Fire e Fighting.",
				de: "Solange dieses Pokémon im Spiel ist, ist es vom Typ Fire und Fighting."
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
				en: "Turbo Drive",
				fr: "Propulsion Turbo",
				es: "Turboimpulso",
				it: "Modulo Turbo",
				pt: "Unidade Turbo",
				de: "Turboantrieb"
			},
			effect: {
				en: "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
				fr: "Attachez une carte Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
				es: "Une 1 carta de Energía Básica de tu pila de descartes a 1 de tus Pokémon en Banca.",
				it: "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base dalla tua pila degli scarti.",
				pt: "Ligue 1 carta de Energia básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				de: "Lege 1 Basis-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
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

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "When facing a tough foe, it looses flames from its wrists. Its powerful legs let it jump clear over buildings."
	}
}

export default card
