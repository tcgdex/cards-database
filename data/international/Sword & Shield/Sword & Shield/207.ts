import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Bede",
		'fr-fr': "Travis",
		'es-es': "Berto",
		'it-it': "Beet",
		'pt-br': "Beda",
		'de-de': "Betys"
	},

	illustrator: "Naoki Saito",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Attach a basic Energy card from your hand to 1 of your Benched Pokémon.",
		'fr-fr': "Attachez une carte Énergie de base de votre main à l'un de vos Pokémon de Banc.",
		'es-es': "Une 1 carta de Energía Básica de tu mano a 1 de tus Pokémon en Banca.",
		'it-it': "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base dalla tua mano.",
		'pt-br': "Ligue 1 carta de Energia básica da sua mão a 1 dos seus Pokémon no Banco.",
		'de-de': "Lege 1 Basis-Energiekarte aus deiner Hand an 1 Pokémon auf deiner Bank an."
	},

	trainerType: "Supporter",
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 437124,
		tcgplayer: 208483
	}
}

export default card
