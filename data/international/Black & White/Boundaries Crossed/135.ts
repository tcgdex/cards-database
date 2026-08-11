import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Switch",
		'fr-fr': "Échange",
		'es-es': "Cambio",
		'it-it': "Scambio",
		'pt-br': "Substituição",
		'de-de': "Tausch"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Échangez votre Pokémon Actif avec 1 de vos Pokémon de Banc.",
		'en-us': "Switch your Active Pokémon with 1 of your Benched Pokémon.",
		'es-es': "Cambia a tu Pokémon Activo por 1 de tus Pokémon en Banca.",
		'it-it': "Scambia il tuo Pokémon attivo con uno dei tuoi Pokémon in panchina.",
		'pt-br': "Troque seu Pokémon Ativo por 1 dos Pokémon no seu Banco.",
		'de-de': "Tausche dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank aus."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 280722,
		tcgplayer: 89722
	}
}

export default card
