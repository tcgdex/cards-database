import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Switch",
		fr: "Échange",
		es: "Cambio",
		it: "Scambio",
		pt: "Substituição",
		de: "Tausch"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Switch your Active Pokémon with 1 of your Benched Pokémon.",
		fr: "Échangez votre Pokémon Actif contre l'un de vos Pokémon de Banc.",
		es: "Cambia tu Pokémon Activo por 1 de tus Pokémon en Banca.",
		it: "Scambia il tuo Pokémon attivo con uno della tua panchina.",
		pt: "Troque o seu Pokémon Ativo por 1 dos seus Pokémon no Banco.",
		de: "Tausche dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank aus."
	},

	trainerType: "Item",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
