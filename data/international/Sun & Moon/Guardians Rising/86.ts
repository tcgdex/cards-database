import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Probopass",
		'fr-fr': "Tarinorme",
		'es-es': "Probopass",
		'it-it': "Probopass",
		'pt-br': "Probopass",
		'de-de': "Voluminas"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		476,
	],

	hp: 130,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Nosepass",
		'fr-fr': "Tarinor",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Energy Link",
				'fr-fr': "Chaîne d’Énergie",
				'es-es': "Vínculo de Energía",
				'it-it': "Legame Energetico",
				'pt-br': "Elo de Energia",
				'de-de': "Energie-Verbindung"
			},
			effect: {
				'en-us': "Attach an Energy card from your discard pile to this Pokémon.",
				'fr-fr': "Attachez une carte Énergie de votre pile de défausse à ce Pokémon.",
				'es-es': "Une 1 carta de Energía de tu pila de descartes a este Pokémon.",
				'it-it': "Assegna a questo Pokémon una carta Energia dalla tua pila degli scarti.",
				'pt-br': "Ligue 1 carta de Energia da sua pilha de descarte a este Pokémon.",
				'de-de': "Lege 1 Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Power Gem",
				'fr-fr': "Rayon Gemme",
				'es-es': "Joya de Luz",
				'it-it': "Gemmoforza",
				'pt-br': "Gema Poderosa",
				'de-de': "Juwelenkraft"
			},

			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It radiates such a powerful magnetic field that nearby electrical appliances become unusable.",
	},

	thirdParty: {
		cardmarket: 297542,
		tcgplayer: 131000
	}
}

export default card
