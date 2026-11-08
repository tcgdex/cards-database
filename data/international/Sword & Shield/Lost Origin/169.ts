import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Volo",
		'fr-fr': "Percupio",
		'es-es': "Volus",
		'it-it': "Ethelo",
		'pt-br': "Volo",
		'de-de': "Volo"
	},

	illustrator: "kirisAki",
	rarity: "Holo Rare",
	category: "Trainer",

	effect: {
		'en-us': "Discard 1 of your Benched Pokémon V and all attached cards.",
		'fr-fr': "Défaussez l'un de vos Pokémon-V de Banc et toutes les cartes attachées.",
		'es-es': "Descarta 1 de tus Pokémon V en Banca y todas las cartas unidas a él.",
		'it-it': "Scarta uno dei tuoi Pokémon-V in panchina e tutte le carte a esso assegnate.",
		'pt-br': "Descarte 1 dos seus Pokémon V no Banco e todas as cartas ligadas a ele.",
		'de-de': "Lege 1 Pokémon-V auf deiner Bank und alle angelegten Karten auf deinen Ablagestapel."
	},

	trainerType: "Supporter",
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 674177,
				tcgplayer: 284104
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674177,
				tcgplayer: 284104
			}
		},
	],
}

export default card
