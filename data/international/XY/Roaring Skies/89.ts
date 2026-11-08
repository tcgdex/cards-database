import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Sky Field",
		'fr-fr': "Zone Aérienne",
		'es-es': "Campo Celestial",
		'it-it': "Campo Aereo",
		'pt-br': "Campo Celeste",
		'de-de': "Himmelsfeld"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Chaque joueur peut avoir 8 Pokémon sur son Banc.\n\n(Lorsque cette carte n'est plus en jeu, chaque joueur défausse des Pokémon de Banc jusqu'à en avoir 5 sur le Banc. Le propriétaire de cette carte défausse en premier.)",
		'en-us': "Each player can have 8 Pokémon on his or her Bench.\n\n(When this card leaves play, each player discards Benched Pokémon until he or she has 5 Pokémon on the Bench. The owner of this card discards first.)",
		'es-es': "Cada jugador puede tener 8 Pokémon en su Banca.",
		'it-it': "Ciascun giocatore può avere otto Pokémon nella sua panchina.",
		'pt-br': "Cada jogador pode ter 8 Pokémon no Banco.",
		'de-de': "Jeder Spieler kann 8 Pokémon auf seiner Bank haben."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 282757,
		tcgplayer: 98125
	}
}

export default card
