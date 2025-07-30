import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [323],
	set: Set,

	name: {
		fr: "Camérupt",
		en: "Camerupt",
		es: "Camerupt",
		it: "Camerupt",
		pt: "Camerupt",
		de: "Camerupt"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			fr: "Éruption",
			en: "Eruption",
			es: "Estallido",
			it: "Eruzione",
			pt: "Erupção",
			de: "Eruption"
		},

		effect: {
			fr: "Défaussez la carte du dessus du deck de chaque joueur. Cette attaque inflige 100 dégâts supplémentaires pour chaque carte Énergie défaussée de cette façon.",
			en: "Discard the top card of each player's deck. This attack does 100 more damage for each Energy card discarded in this way.",
			es: "Descarta la primera carta de la baraja de cada jugador. Este ataque hace 100 puntos de daño más por cada carta de Energía descartada de esta manera.",
			it: "Scarta la prima carta del mazzo di ciascun giocatore. Questo attacco infligge 100 danni in più per ogni carta Energia scartata in questo modo.",
			pt: "Descarte a carta de cima do baralho de cada jogador. Este ataque causa 100 pontos de dano a mais para cada carta de Energia descartada desta forma.",
			de: "Lege die oberste Karte des Decks jedes Spielers auf seinen Ablagestapel. Diese Attacke fügt für jede Energiekarte, die auf diese Weise auf den Ablagestapel gelegt wurde, 100 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			fr: "Piétinement Fumant",
			en: "Steaming Stomp",
			es: "Pisotón Humeante",
			it: "Pestata Incandescente",
			pt: "Pisoteada Fumegante",
			de: "Dampfstampfer"
		},

		damage: 120
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Shiburingaru",

	thirdParty: {
		cardmarket: 725112
	}
}

export default card