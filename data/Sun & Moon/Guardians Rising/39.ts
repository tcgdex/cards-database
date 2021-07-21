import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Mareanie",
		fr: "Vorastérie",
		es: "Mareanie",
		it: "Mareanie",
		pt: "Mareanie",
		de: "Garstella"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		747,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bail Out",
				fr: "Renflouage",
				es: "Sacar de Apuros",
				it: "Soccorso",
				pt: "Salvamento",
				de: "Freilassen"
			},
			effect: {
				en: "Put a Pokémon from your discard pile into your hand.",
				fr: "Ajoutez un Pokémon de votre pile de défausse à votre main.",
				es: "Pon 1 Pokémon de tu pila de descartes en tu mano.",
				it: "Prendi un Pokémon dalla tua pila degli scarti e aggiungilo alle carte che hai in mano.",
				pt: "Coloque 1 Pokémon da sua pilha de descarte na sua mão.",
				de: "Nimm 1 Pokémon aus deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Rain Splash",
				fr: "Pluie éclaboussante",
				es: "Golpe de Lluvia",
				it: "Spruzzapioggia",
				pt: "Chuva Borrifante",
				de: "Regenplatscher"
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
