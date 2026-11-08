import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Apia",
		'en-us': "Honey",
		'es-es': "Tania",
		'it-it': "Tania",
		'pt-br': "Mel",
		'de-de': "Enia"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'fr-fr': "Piochez une carte pour chacun des Pokémon-V de Banc de votre adversaire.",
		'en-us': "Draw a card for each of your opponent's Benched Pokémon V.",
		'es-es': "Roba 1 carta por cada uno de los Pokémon V en Banca de tu rival.",
		'it-it': "Pesca una carta per ciascuno dei Pokémon-V nella panchina del tuo avversario.",
		'pt-br': "Compre 1 carta para cada Pokémon V no Banco do seu oponente.",
		'de-de': "Ziehe 1 Karte für jedes Pokémon-V auf der Bank deines Gegners."
	},

	trainerType: "Supporter",
	regulationMark: "E",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567300,
				tcgplayer: 241839
			}
		},
	],
}

export default card
