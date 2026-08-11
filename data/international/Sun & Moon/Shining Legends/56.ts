import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Shining Rayquaza",
		'fr-fr': "Rayquaza Brillant",
		'es-es': "Rayquaza Luminoso",
		'it-it': "Rayquaza iridescente",
		'pt-br': "Rayquaza Luminescente",
		'de-de': "Schimmerndes Rayquaza"
	},

	illustrator: "Naoki Saito",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		384,
	],

	hp: 120,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Dragon Pulse",
				'fr-fr': "Dracochoc",
				'es-es': "Pulso Dragón",
				'it-it': "Dragopulsar",
				'pt-br': "Pulso do Dragão",
				'de-de': "Drachenpuls"
			},
			effect: {
				'en-us': "Discard the top 2 cards of your deck.",
				'fr-fr': "Défaussez les 2 cartes du dessus de votre deck.",
				'es-es': "Descarta las 2 primeras cartas de tu baraja.",
				'it-it': "Scarta le prime due carte del tuo mazzo.",
				'pt-br': "Descarte as 2 primeiras cartas do seu baralho.",
				'de-de': "Lege die obersten 2 Karten deines Decks auf deinen Ablagestapel."
			},
			damage: 40,

		},
		{
			cost: [
				"Fire",
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Sky Judgment",
				'fr-fr': "Jugement Céleste",
				'es-es': "Juicio Celeste",
				'it-it': "Giudizio Celeste",
				'pt-br': "Julgamento Celeste",
				'de-de': "Himmelsurteil"
			},
			effect: {
				'en-us': "Discard 3 Energy from this Pokémon.",
				'fr-fr': "Défaussez 3 Énergies de ce Pokémon.",
				'es-es': "Descarta 3 Energías de este Pokémon.",
				'it-it': "Scarta tre Energie assegnate a questo Pokémon.",
				'pt-br': "Descarte 3 Energias deste Pokémon.",
				'de-de': "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 190,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It lives in the ozone layer far above the clouds and cannot be seen from the ground.",
	},

	thirdParty: {
		cardmarket: 302193,
		tcgplayer: 146719
	}
}

export default card
