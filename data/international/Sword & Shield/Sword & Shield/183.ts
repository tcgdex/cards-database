import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Switch",
		'fr-fr': "Échange",
		'es-es': "Cambio",
		'it-it': "Scambio",
		'pt-br': "Substituição",
		'de-de': "Tausch"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Switch your Active Pokémon with 1 of your Benched Pokémon.",
		'fr-fr': "Échangez votre Pokémon Actif contre l'un de vos Pokémon de Banc.",
		'es-es': "Cambia tu Pokémon Activo por 1 de tus Pokémon en Banca.",
		'it-it': "Scambia il tuo Pokémon attivo con uno della tua panchina.",
		'pt-br': "Troque o seu Pokémon Ativo por 1 dos seus Pokémon no Banco.",
		'de-de': "Tausche dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank aus."
	},

	trainerType: "Item",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 437009,
		tcgplayer: 208516
	}
}

export default card
