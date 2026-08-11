import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Forest of Vitality",
		'fr-fr': "Forêt de Vitalité",
		'es-es': "Bosque Vitalidad",
		'es-mx': "Bosque de Vitalidad",
		'de-de': "Wald der Vitalität",
		'it-it': "Bosco della Vitalità",
		'pt-br': "Floresta da Vitalidade"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Each player's {G} Pokémon can evolve into {G} Pokémon during the turn they play those Pokémon, except during their first turn.",
		'fr-fr': "Les Pokémon {G} de chaque personne peuvent évoluer en Pokémon {G} pendant le tour où elle les joue, sauf pendant son premier tour.",
		'es-es': "Los Pokémon {G} de cada jugador pueden evolucionar a Pokémon {G} durante el turno en que cada jugador los ponga en juego, excepto durante su primer turno.",
		'es-mx': "Los Pokémon {G} de cada jugador pueden evolucionar a Pokémon {G} durante el turno en que se pongan en juego, excepto durante el primer turno de cada jugador.",
		'de-de': "Die {G}-Pokémon jedes Spielers können sich während des Zuges, in dem der Spieler jene Pokémon spielt, zu {G}-Pokémon entwickeln, außer während seines ersten Zuges.",
		'it-it': "I Pokémon {G} di ciascun giocatore possono evolversi in Pokémon {G} durante il turno in cui quei Pokémon vengono giocati, a eccezione del primo turno di ciascun giocatore.",
		'pt-br': "Os Pokémon {G} de cada jogador poderão evoluir para Pokémon {G} durante o turno em que eles jogaram aqueles Pokémon, exceto durante os primeiros turnos deles."
	},

	trainerType: "Stadium",
	regulationMark: "I",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869799,
			tcgplayer: 676000
		}
	},
	{
		type: "reverse",
		thirdParty: {
			cardmarket: 869799,
			tcgplayer: 676000
		}
	},
],
}

export default card