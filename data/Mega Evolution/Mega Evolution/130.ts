import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Switch",
		fr: "Échange",
		de: "Tausch",
		it: "Scambio",
		es: "Cambio",
		pt: "Substituição",
		'es-mx': "Cambio"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Common",
	category: "Trainer",

	effect: {
		en: "Switch your Active Pokémon with 1 of your Benched Pokémon.",
		fr: "Échangez votre Pokémon Actif contre l'un de vos Pokémon de Banc.",
		de: "Tausche dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank aus.",
		it: "Scambia il tuo Pokémon attivo con uno nella tua panchina.",
		es: "Cambia tu Pokémon Activo por uno de tus Pokémon en Banca.",
		pt: "Troque o seu Pokémon Ativo por 1 dos seus Pokémon no Banco.",
		'es-mx': "Cambia tu Pokémon Activo por 1 de tus Pokémon en Banca."
	},

	trainerType: "Item",
	regulationMark: "I",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 654469,
		cardmarket: 851201
	}
}

export default card