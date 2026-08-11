import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Lass's Special",
		'fr-fr': "Spécialité de Fillette",
		'es-es': "Especialidad de la Chica",
		'it-it': "Omaggio della Pupa",
		'pt-br': "Especialidade da Garota",
		'de-de': "Görentalent"
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Piochez une carte pour chaque Pokémon de base du Banc de votre adversaire.",
		'en-us': "Draw a card for each of your opponent's Benched Basic Pokémon.",
		'es-es': "Roba 1 carta por cada uno de los Pokémon Básicos en Banca de tu rival.",
		'it-it': "Pesca una carta per ogni Pokémon Base nella panchina del tuo avversario.",
		'pt-br': "Compre um card para cada Pokémon Básico no Banco do seu oponente.",
		'de-de': "Ziehe 1 Karte für jedes Basis-Pokémon auf der Bank deines Gegners."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 289923,
		tcgplayer: 117875
	}
}

export default card
