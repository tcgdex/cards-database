import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Multi Switch",
		'fr-fr': "Échange Multiple",
		'es-es': "Multiinterruptor",
		'it-it': "Scambio Multiplo",
		'pt-br': "Multissubstituição",
		'de-de': "Multitausch"
	},

	illustrator: "Toyste Beach",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Déplacez une Énergie de l’un de vos Pokémon de Banc vers votre Pokémon Actif.",
		'en-us': "Move an Energy from 1 of your Benched Pokémon to your Active Pokémon.",
		'es-es': "Mueve 1 Energía de 1 de tus Pokémon en Banca a tu Pokémon Activo.",
		'it-it': "Sposta un’Energia da uno dei tuoi Pokémon in panchina al tuo Pokémon attivo.",
		'pt-br': "Mova 1 Energia de 1 dos seus Pokémon no Banco para o seu Pokémon Ativo.",
		'de-de': "Verschiebe 1 Energie von 1 Pokémon auf deiner Bank auf dein Aktives Pokémon."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 299562,
		tcgplayer: 138633
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
