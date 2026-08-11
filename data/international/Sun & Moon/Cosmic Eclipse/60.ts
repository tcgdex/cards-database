import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Swanna",
		'fr-fr': "Lakmécygne",
		'es-es': "Swanna",
		'it-it': "Swanna",
		'pt-br': "Swanna",
		'de-de': "Swaroness"
	},

	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		581,
	],

	hp: 110,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Ducklett",
		'fr-fr': "Couaneton",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tailwind",
				'fr-fr': "Vent Arrière",
				'es-es': "Viento Afín",
				'it-it': "Ventoincoda",
				'pt-br': "Vento de Cauda",
				'de-de': "Rückenwind"
			},
			effect: {
				'en-us': "Attach an Energy card from your hand to 1 of your Pokémon.",
				'fr-fr': "Attachez une carte Énergie de votre main à l’un de vos Pokémon.",
				'es-es': "Une 1 carta de Energía de tu mano a 1 de tus Pokémon.",
				'it-it': "Assegna una carta Energia dalla tua mano a uno dei tuoi Pokémon.",
				'pt-br': "Ligue 1 carta de Energia da sua mão a 1 dos seus Pokémon.",
				'de-de': "Lege 1 Energiekarte aus deiner Hand an 1 deiner Pokémon an."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Air Slash",
				'fr-fr': "Lame d’Air",
				'es-es': "Tajo Aéreo",
				'it-it': "Eterelama",
				'pt-br': "Golpe de Ar",
				'de-de': "Luftschnitt"
			},
			effect: {
				'en-us': "Discard an Energy from this Pokémon.",
				'fr-fr': "Défaussez une Énergie de ce Pokémon.",
				'es-es': "Descarta 1 Energía de este Pokémon.",
				'it-it': "Scarta un’Energia assegnata a questo Pokémon.",
				'pt-br': "Descarte 1 Energia deste Pokémon.",
				'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Despite their elegant appearance, they can flap their wings strongly and fly for thousands of miles.",
	},

	thirdParty: {
		cardmarket: 407949,
		tcgplayer: 201236
	}
}

export default card
