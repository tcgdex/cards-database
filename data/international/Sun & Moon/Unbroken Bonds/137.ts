import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Togetic",
		'fr-fr': "Togetic",
		'es-es': "Togetic",
		'it-it': "Togetic",
		'pt-br': "Togetic",
		'de-de': "Togetic"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		176,
	],

	hp: 80,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Togepi",
		'fr-fr': "Togepi",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Energy Present",
				'fr-fr': "Cadeau d’Énergie",
				'es-es': "Obsequio de Energía",
				'it-it': "Regalo Energetico",
				'pt-br': "Energia Presente",
				'de-de': "Energiegeschenk"
			},
			effect: {
				'en-us': "Attach an Energy card from your hand to 1 of your Benched Pokémon.",
				'fr-fr': "Attachez une carte Énergie de votre main à l’un de vos Pokémon de Banc.",
				'es-es': "Une 1 carta de Energía de tu mano a 1 de tus Pokémon en Banca.",
				'it-it': "Assegna una carta Energia dalla tua mano a uno dei tuoi Pokémon panchina.",
				'pt-br': "Ligue 1 carta de Energia da sua mão a 1 dos seus Pokémon no Banco.",
				'de-de': "Lege 1 Energiekarte aus deiner Hand an 1 Pokémon auf deiner Bank an."
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Magical Shot",
				'fr-fr': "Coup Magique",
				'es-es': "Disparo Mágico",
				'it-it': "Magicolpo",
				'pt-br': "Tiro Mágico",
				'de-de': "Magischer Schuss"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It grows dispirited if it is not with kind people. It can float in midair without moving its wings.",
	},

	thirdParty: {
		cardmarket: 372424,
		tcgplayer: 189235
	}
}

export default card
