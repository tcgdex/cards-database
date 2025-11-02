import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		fr: "Échange",
		en: "Switch",
		es: "Cambio",
		it: "Scambio",
		pt: "Substituição",
		de: "Tausch"
	},

	rarity: "Hyper rare",
	category: "Trainer",

	effect: {
		fr: "Échangez votre Pokémon Actif contre l'un de vos Pokémon de Banc.",
		en: "Switch your Active Pokémon with 1 of your Benched Pokémon.",
		es: "Cambia tu Pokémon Activo por uno de tus Pokémon en Banca.",
		it: "Scambia il tuo Pokémon attivo con uno della tua panchina.",
		pt: "Troque o seu Pokémon Ativo por 1 dos seus Pokémon no Banco.",
		de: "Tausche dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank aus."
	},

	trainerType: "Item",
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "Studio Bora Inc.",

	thirdParty: {
		cardmarket: 733755
	}
}

export default card