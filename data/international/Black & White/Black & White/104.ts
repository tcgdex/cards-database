import { Card } from 'models/database/card'
import Set from '../Black & White'

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
		'fr-fr': "Échangez votre Pokémon Actif avec l’un de vos Pokémon de Banc.",
		'en-us': "Switch your Active Pokémon with 1 of your Benched Pokémon.",
		'es-es': "Cambia tu Pokémon Activo por 1 de tus Pokémon en Banca.",
		'it-it': "Scambia il tuo Pokémon attivo con uno dei tuoi Pokémon in panchina.",
		'pt-br': "Troque seu Pokémon Ativo por 1 dos seus Pokémon no Banco.",
		'de-de': "Tausche dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank aus."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 279842,
		tcgplayer: 89721
	}
}

export default card
