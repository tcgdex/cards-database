import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Mareanie",
		'fr-fr': "Vorastérie",
		'es-es': "Mareanie",
		'it-it': "Mareanie",
		'pt-br': "Mareanie",
		'de-de': "Garstella"
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
				'en-us': "Bail Out",
				'fr-fr': "Renflouage",
				'es-es': "Sacar de Apuros",
				'it-it': "Soccorso",
				'pt-br': "Salvamento",
				'de-de': "Freilassen"
			},
			effect: {
				'en-us': "Put a Pokémon from your discard pile into your hand.",
				'fr-fr': "Ajoutez un Pokémon de votre pile de défausse à votre main.",
				'es-es': "Pon 1 Pokémon de tu pila de descartes en tu mano.",
				'it-it': "Prendi un Pokémon dalla tua pila degli scarti e aggiungilo alle carte che hai in mano.",
				'pt-br': "Coloque 1 Pokémon da sua pilha de descarte na sua mão.",
				'de-de': "Nimm 1 Pokémon aus deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Rain Splash",
				'fr-fr': "Pluie éclaboussante",
				'es-es': "Golpe de Lluvia",
				'it-it': "Spruzzapioggia",
				'pt-br': "Chuva Borrifante",
				'de-de': "Regenplatscher"
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

	description: {
		'en-us': "It plunges the poison spike on its head into its prey. When the prey has weakened, Mareanie deals the finishing blow with its 10 tentacles.",
	},

	thirdParty: {
		cardmarket: 297501,
		tcgplayer: 130941
	}
}

export default card
