import { Card } from "models/database/card"
import Set from "../My First Battle"

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
	rarity: "None",
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
	regulationMark: "None",

	variants: [
		{
			type: "normal",
			stamp: ["pikachu"],

			thirdParty: {
				cardmarket: 742008,
				tcgplayer: 524028
			}
		},
		{
			type: "normal",
			stamp: ["squirtle"],

			thirdParty: {
				cardmarket: 742020,
				tcgplayer: 524034
			}
		},
		{
			type: "normal",
			stamp: ["bulbasaur"],

			thirdParty: {
				cardmarket: 741984,
				tcgplayer: 524026
			}
		},
		{
			type: "normal",
			stamp: ["charmander"],

			thirdParty: {
				cardmarket: 741996,
				tcgplayer: 524036
			}
		},
	],

	thirdParty: {
		cardmarket: 741984,
		tcgplayer: 524026
	}
}

export default card