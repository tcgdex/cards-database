import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Pokémon Ranger",
		'fr-fr': "Pokémon Ranger",
		'es-es': "Pokémon Ranger",
		'it-it': "Pokémon Ranger",
		'pt-br': "Pokémon Ranger",
		'de-de': "Pokémon Ranger"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Supprimez tous les effets des attaques sur chaque joueur et ses Pokémon.",
		'en-us': "Remove all effects of attacks on each player and his or her Pokémon.",
		'es-es': "Elimina todos los efectos de los ataques en cada jugador y sus Pokémon.",
		'it-it': "Rimuovi tutti gli effetti degli attacchi da ciascun giocatore e dai suoi Pokémon.",
		'pt-br': "Remove todos os efeitos de ataques em cada jogador e seus Pokémon.",
		'de-de': "Alle Effekte von Angriffen verlieren bei beiden Spielern und ihren Pokémon ihre Wirkung."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 291560
	}
}

export default card
