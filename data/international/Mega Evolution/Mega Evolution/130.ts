import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Switch",
		'fr-fr': "Échange",
		'de-de': "Tausch",
		'it-it': "Scambio",
		'es-es': "Cambio",
		'pt-br': "Substituição",
		'es-mx': "Cambio"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Common",
	category: "Trainer",

	effect: {
		'en-us': "Switch your Active Pokémon with 1 of your Benched Pokémon.",
		'fr-fr': "Échangez votre Pokémon Actif contre l'un de vos Pokémon de Banc.",
		'de-de': "Tausche dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank aus.",
		'it-it': "Scambia il tuo Pokémon attivo con uno nella tua panchina.",
		'es-es': "Cambia tu Pokémon Activo por uno de tus Pokémon en Banca.",
		'pt-br': "Troque o seu Pokémon Ativo por 1 dos seus Pokémon no Banco.",
		'es-mx': "Cambia tu Pokémon Activo por 1 de tus Pokémon en Banca."
	},

	trainerType: "Item",
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851201,
				tcgplayer: 654469
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851201,
				tcgplayer: 654469
			}
		},
	],
}

export default card
