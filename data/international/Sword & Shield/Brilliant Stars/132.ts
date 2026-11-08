import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Boss's Orders",
		'fr-fr': "Ordres du Boss",
		'es-es': "Órdenes de Jefes",
		'it-it': "Ordini del Capo",
		'pt-br': "Ordem da Chefia",
		'de-de': "Befehl vom Boss"
	},

	illustrator: "GIDORA",
	rarity: "Holo Rare",
	category: "Trainer",

	effect: {
		'en-us': "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
		'fr-fr': "Échangez l'un des Pokémon de Banc de votre adversaire contre son Pokémon Actif.",
		'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
		'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
		'pt-br': "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a).",
		'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus."
	},

	trainerType: "Supporter",
	regulationMark: "D",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608678,
				tcgplayer: 263855
			}
		},
		{
			type: 'holo',
			stamp: ['regional-championships'],
			thirdParty: {
				cardmarket: 660946
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 716227
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608678,
				tcgplayer: 263855
			}
		},
	],
}

export default card
