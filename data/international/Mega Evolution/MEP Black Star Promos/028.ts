import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Celebratory Fanfare",
		'fr-fr': "Fanfare de Fête",
		'de-de': "Festliche Fanfare",
		'it-it': "Fanfara di Celebrazione",
		'es-es': "Algarabía Celebratoria",
		'pt-br': "Fanfarra de Celebração"
	},

	illustrator: "Yuu Nishida",
	rarity: "Promo",
	category: "Trainer",
	trainerType: "Stadium",
	regulationMark: "I",

	effect: {
		'en-us': "Once during each player's turn, that player may heal 10 damage from each of their Pokémon. If a player healed any damage in this way, their turn ends.",
		'fr-fr': "Une fois pendant le tour de chaque personne, cette personne-là peut soigner 10 dégâts de chacun de ses Pokémon. Si des dégâts sont ainsi soignés, son tour se termine.",
		'de-de': "Einmal während des Zuges jedes Spielers kann jener Spieler 10 Schadenspunkte bei jedem seiner Pokémon heilen. Wenn ein Spieler auf diese Weise Schaden geheilt hat, endet sein Zug.",
		'it-it': "Una sola volta durante il turno di ciascun giocatore, quel giocatore può curare 10 danni da ognuno dei suoi Pokémon. Se un giocatore ha curato dei danni in questo modo, il suo turno finisce.",
		'es-es': "Una vez durante el turno de cada jugador, ese jugador puede curar 10 puntos de daño a cada uno de sus Pokémon. Si un jugador ha curado algún punto de daño de esta manera, su turno termina.",
		'pt-br': "Uma vez durante o turno de cada jogador, aquele jogador poderá curar 10 pontos de dano de cada um dos seus próprios Pokémon. Se um jogador curar qualquer dano desta forma, o turno dele acabará."
	},

	variants: [
		{
			type: "holo",
			stamp: ["ace-trainer"],
			thirdParty: {
            	cardmarket: 850977,
            	tcgplayer: 681244
            }
		},
	],
}

export default card
