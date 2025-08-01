import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Switch",
		fr: "Échange",
		es: "Cambio",
		it: "Scambio",
		pt: "Substituição",
		de: "Tausch"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Échangez votre Pokémon Actif avec 1 de vos Pokémon de Banc.",
		en: "Switch your Active Pokémon with 1 of your Benched Pokémon.",
		es: "Cambia a tu Pokémon Activo por 1 de tus Pokémon en Banca.",
		it: "Scambia il tuo Pokémon attivo con uno dei tuoi Pokémon in panchina.",
		pt: "Troque seu Pokémon Ativo por 1 dos Pokémon no seu Banco.",
		de: "Tausche dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank aus."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 280722,
		tcgplayer: 89722
	}
}

export default card
