import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		en: "Community Center",
		fr: "Centre Culturel",
		es: "Centro Cultural",
		it: "Circolo Comunale",
		pt: "Centro Comunitário",
		de: "Gemeindehaus"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Once during each player's turn, if they played a Supporter card from their hand this turn, they may heal 10 damage from each of their Pokémon.",
		fr: "Une fois pendant le tour de chaque joueur, si ce joueur a joué une carte Supporter de sa main pendant ce tour, il peut soigner 10 dégâts de chacun de ses Pokémon.",
		es: "Una vez durante el turno de cada jugador, si ese jugador juega una carta de Partidario de su mano durante su turno, puede curar 10 puntos de daño a cada uno de sus Pokémon.",
		it: "Una sola volta durante il turno di ciascun giocatore, se quel giocatore ha giocato una carta Aiuto dalla propria mano durante questo turno, può curare ciascuno dei suoi Pokémon da 10 danni.",
		pt: "Uma vez durante o turno de cada jogador, se ele jogou uma carta de Apoiador da própria mão neste turno, ele poderá curar 10 pontos de dano de cada um dos seus próprios Pokémon.",
		de: "Einmal während des Zuges jedes Spielers, wenn er eine Unterstützerkarte während dieses Zuges aus seiner Hand gespielt hat, kann er 10 Schadenspunkte bei jedem seiner Pokémon heilen."
	},

	trainerType: "Stadium",
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "MARINA Chikazawa"
}

export default card