import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Switch",
		fr: "Échange",
		es: "Cambio",
		it: "Scambio",
		pt: "Substituição",
		de: "Tausch"
	},

	rarity: "Common",
	category: "Trainer",

	effect: {
		en: "Switch your Active Pokémon with 1 of your Benched Pokémon.",
		fr: "Échangez votre Pokémon Actif contre l'un de vos Pokémon de Banc.",
		es: "Cambia tu Pokémon Activo por 1 de tus Pokémon en Banca.",
		it: "Scambia il tuo Pokémon attivo con uno della tua panchina.",
		pt: "Troque o seu Pokémon Ativo por 1 dos seus Pokémon no Banco.",
		de: "Tausche dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank aus."
	},

	trainerType: "Item",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 691863,
		tcgplayer: 478203
	}
}

export default card