import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Drampa",
		fr: "Draïeul",
		es: "Drampa",
		it: "Drampa",
		pt: "Drampa",
		de: "Sen-Long"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		780,
	],

	hp: 120,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dragon Wisdom",
				fr: "Sagesse des Dragons",
				es: "Sabiduría de Dragón",
				it: "Saggezza del Drago",
				pt: "Sabedoria de Dragão",
				de: "Drachenweisheit"
			},
			effect: {
				en: "Attach a basic Energy card from your discard pile to 1 of your Dragon Pokémon.",
				fr: "Attachez une carte Énergie de base de votre pile de défausse à l’un de vos Pokémon Dragon.",
				es: "Une 1 carta de Energía Básica de tu pila de descartes a 1 de tus Pokémon Dragon.",
				it: "Assegna a uno dei tuoi Pokémon Dragon una carta Energia base dalla tua pila degli scarti.",
				pt: "Ligue 1 carta de Energia básica da sua pilha de descarte a 1 dos seus Pokémon Dragon.",
				de: "Lege 1 Basis-Energiekarte aus deinem Ablagestapel an 1 deiner Dragon-Pokémon an."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Voice",
				fr: "Mégaphone",
				es: "Vozarrón",
				it: "Granvoce",
				pt: "Hipervoz",
				de: "Schallwelle"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 363522,
		tcgplayer: 175481
	}
}

export default card
