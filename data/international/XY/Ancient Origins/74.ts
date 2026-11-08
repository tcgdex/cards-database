import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Forest of Giant Plants",
		'fr-fr': "Forêt de Plantes Géantes",
		'es-es': "Bosque de Plantas Gigantes",
		'it-it': "Foresta delle Piante Giganti",
		'pt-br': "Floresta das Plantas Gigantes",
		'de-de': "Wald der großen Gewächse"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Les Pokémon Grass de chaque joueur peuvent évoluer pendant son premier tour ou pendant le tour où il joue les Pokémon concernés.",
		'en-us': "Each player's Grass Pokémon can evolve during his or her first turn or the turn he or she plays those Pokémon.",
		'es-es': "Los Pokémon Grass de cada jugador pueden evolucionar durante el primer turno de ese jugador o durante el turno en que este ponga en juego a esos Pokémon.",
		'it-it': "I Pokémon Grass di ciascun giocatore possono evolversi durante il suo primo turno o durante il turno in cui sono stati giocati.",
		'pt-br': "O Pokémon Grass de cada jogador poderá evoluir durante a sua primeira vez de jogar ou na vez em que jogar este Pokémon.",
		'de-de': "Die Grass-Pokémon beider Spieler können sich während des ersten Zuges eines Spielers oder während des Zuges, an dem ein Spieler diese Pokémon spielt, entwickeln."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 284255,
		tcgplayer: 101496
	}
}

export default card
