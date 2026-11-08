import { Card } from "models/database/card"
import Set from "../Crown Zenith"

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

	illustrator: "Studio Bora Inc.",
	rarity: "Common",
	category: "Trainer",

	effect: {
		'en-us': "Switch your Active Pokémon with 1 of your Benched Pokémon.",
		'fr-fr': "Échangez votre Pokémon Actif contre l'un de vos Pokémon de Banc.",
		'es-es': "Cambia tu Pokémon Activo por 1 de tus Pokémon en Banca.",
		'it-it': "Scambia il tuo Pokémon attivo con uno della tua panchina.",
		'pt-br': "Troque o seu Pokémon Ativo por 1 dos seus Pokémon no Banco.",
		'de-de': "Tausche dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank aus."
	},

	trainerType: "Item",


	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691863,
				tcgplayer: 478203
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691863,
				tcgplayer: 478203
			}
		},
	],
}

export default card
