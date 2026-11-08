import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Switch",
		'fr-fr': "Échange",
		'es-es': "Cambio",
		'es-mx': "Cambio",
		'de-de': "Tausch",
		'it-it': "Scambio",
		'pt-br': "Substituição"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Switch your Active Pokémon with 1 of your Benched Pokémon.",
		'fr-fr': "Échangez votre Pokémon Actif contre l'un de vos Pokémon de Banc.",
		'es-es': "Cambia tu Pokémon Activo por uno de tus Pokémon en Banca.",
		'es-mx': "Cambia tu Pokémon Activo por 1 de tus Pokémon en Banca.",
		'de-de': "Tausche dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank aus.",
		'it-it': "Scambia il tuo Pokémon attivo con uno nella tua panchina.",
		'pt-br': "Troque o seu Pokémon Ativo por 1 dos seus Pokémon no Banco."
	},

	trainerType: "Item",
	regulationMark: "I",

	illustrator: "Studio Bora Inc.",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 857698,
				tcgplayer: 662231,
				cardtrader: 356909
			}
		},
	],
}

export default card
