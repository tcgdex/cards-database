import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Noivern)'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Switch",
		'fr-fr': "Échange",
		'es-es': "Cambio",
		'it-it': "Scambio",
		'pt-br': "Substituição",
		'de-de': "Tausch"
	},

	rarity: "Common",
	category: "Trainer",

	effect: {
		'en-us': "Switch your Active Pokémon with 1 of your Benched Pokémon.",
		'fr-fr': "Échangez votre Pokémon Actif avec l’un de vos Pokémon de Banc.",
		'es-es': "Cambia tu Pokémon Activo por 1 de tus Pokémon en Banca.",
		'it-it': "Scambia il tuo Pokémon attivo con uno dei tuoi Pokémon in panchina.",
		'pt-br': "Substitua seu Pokémon Ativo por 1 dos Pokémon do seu Banco.",
		'de-de': "Tausche dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank aus."
	},

	trainerType: "Item"
}

export default card