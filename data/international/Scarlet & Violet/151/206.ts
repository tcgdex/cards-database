import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Échange",
		'en-us': "Switch",
		'es-es': "Cambio",
		'it-it': "Scambio",
		'pt-br': "Substituição",
		'de-de': "Tausch"
	},

	rarity: "Hyper rare",
	category: "Trainer",

	effect: {
		'fr-fr': "Échangez votre Pokémon Actif contre l'un de vos Pokémon de Banc.",
		'en-us': "Switch your Active Pokémon with 1 of your Benched Pokémon.",
		'es-es': "Cambia tu Pokémon Activo por uno de tus Pokémon en Banca.",
		'it-it': "Scambia il tuo Pokémon attivo con uno della tua panchina.",
		'pt-br': "Troque o seu Pokémon Ativo por 1 dos seus Pokémon no Banco.",
		'de-de': "Tausche dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank aus."
	},

	trainerType: "Item",
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 733801,
				tcgplayer: 517052,
				cardtrader: 261387
			}
		},
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 733801
			}
		},
	],

	illustrator: "Studio Bora Inc.",

	
}

export default card
