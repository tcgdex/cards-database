import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Lysandre",
		'fr-fr': "Lysandre",
		'es-es': "Lysson",
		'it-it': "Elisio",
		'pt-br': "Lysandre",
		'de-de': "Flordelis"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Échangez l'un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
		'en-us': "Switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon.",
		'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
		'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
		'pt-br': "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo desse oponente.",
		'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen das Aktive Pokémon deines Gegners aus."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 281573,
		tcgplayer: 91227
	}
}

export default card
