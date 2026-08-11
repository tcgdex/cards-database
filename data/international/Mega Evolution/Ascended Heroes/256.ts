import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Boss's Orders",
		'fr-fr': "Ordres du Boss",
		'es-es': "Órdenes de Jefes",
		'es-mx': "Órdenes de Jefes",
		'de-de': "Befehl vom Boss",
		'it-it': "Ordini del Capo",
		'pt-br': "Ordem da Chefia"
	},

	illustrator: "akagi",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Switch in 1 of your opponent's Benched Pokémon to the Active Spot.",
		'fr-fr': "Envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif.",
		'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
		'es-mx': "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
		'de-de': "Wechsle 1 Pokémon von der Bank deines Gegners in die Aktive Position ein.",
		'it-it': "Sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva.",
		'pt-br': "Mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo."
	},

	trainerType: "Supporter",
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869866,
				tcgplayer: 676068
			}
		}
	],
}

export default card
