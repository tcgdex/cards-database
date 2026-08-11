import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	set: Set,

	name: {
		'en-us': "N's Plan",
		'fr-fr': "Plan de N",
		'de-de': "Ns Plan",
		'it-it': "Piano di N",
		'pt-br': "Plano do N",
		'es-es': "Plan de N",
		'es-mx': "Plan de N"
	},

	illustrator: "REND",
	rarity: "Special illustration rare",
	category: "Trainer",

	effect: {
		'en-us': "Move up to 2 Energy from your Benched Pokémon to your Active Pokémon.",
		'fr-fr': "Déplacez jusqu'à 2 Énergies de vos Pokémon de Banc vers votre Pokémon Actif.",
		'de-de': "Verschiebe bis zu 2 Energien von Pokémon auf deiner Bank auf dein Aktives Pokémon.",
		'it-it': "Sposta fino a due Energie dai tuoi Pokémon in panchina al tuo Pokémon attivo.",
		'pt-br': "Mova até 2 Energias dos seus Pokémon no Banco para o seu Pokémon Ativo.",
		'es-es': "Mueve hasta 2 Energías de tus Pokémon en Banca a tu Pokémon Activo.",
		'es-mx': "Mueve hasta 2 Energías de tus Pokémon en Banca a tu Pokémon Activo."
	},

	trainerType: "Supporter",
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836244,
				tcgplayer: 642622
			}
		},
	]
}

export default card
