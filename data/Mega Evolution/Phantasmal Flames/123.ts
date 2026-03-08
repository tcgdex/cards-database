import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Switch",
		fr: "Échange",
		es: "Cambio",
		'es-mx': "Cambio",
		de: "Tausch",
		it: "Scambio",
		pt: "Substituição"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Switch your Active Pokémon with 1 of your Benched Pokémon.",
		fr: "Échangez votre Pokémon Actif contre l'un de vos Pokémon de Banc.",
		es: "Cambia tu Pokémon Activo por uno de tus Pokémon en Banca.",
		'es-mx': "Cambia tu Pokémon Activo por 1 de tus Pokémon en Banca.",
		de: "Tausche dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank aus.",
		it: "Scambia il tuo Pokémon attivo con uno nella tua panchina.",
		pt: "Troque o seu Pokémon Ativo por 1 dos seus Pokémon no Banco."
	},

	trainerType: "Item",
	regulationMark: "I",

	variants: [
		{
			type: "holo"
		}
	],

	thirdParty: {
		cardmarket: 857698,
		tcgplayer: 662231
	}
}

export default card