import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Mega Catcher",
		'fr-fr': "Attrape Méga",
		'es-es': "Megacapturador",
		'it-it': "Acchiappa-Mega",
		'pt-br': "Megapegador",
		'de-de': "Mega-Fänger"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Échangez l'un des Pokémon Méga-Évolution du Banc de votre adversaire avec son Pokémon Actif.",
		'en-us': "Switch 1 of your opponent's Benched Mega Evolution Pokémon with his or her Active Pokémon.",
		'es-es': "Cambia 1 de los Pokémon Megaevolución en Banca de tu rival por su Pokémon Activo.",
		'it-it': "Scambia uno dei Pokémon Megaevoluzione nella panchina del tuo avversario con il suo Pokémon attivo.",
		'pt-br': "Troque 1 dos Pokémon de Megaevolução no Banco do seu oponente pelo Pokémon Ativo desse oponente.",
		'de-de': "Tausche 1 Mega-Entwicklungs-Pokémon auf der Bank deines Gegners gegen das Aktive Pokémon deines Gegners aus."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 289924,
		tcgplayer: 117876
	}
}

export default card
