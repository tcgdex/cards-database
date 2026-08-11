import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [323],
	set: Set,

	name: {
		'fr-fr': "Camérupt",
		'en-us': "Camerupt",
		'es-es': "Camerupt",
		'it-it': "Camerupt",
		'pt-br': "Camerupt",
		'de-de': "Camerupt"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	evolveFrom: {
		'fr-fr': "Chamallot",
		'en-us': "Numel",
		'es-es': "Numel",
		'it-it': "Numel",
		'pt-br': "Numel",
		'de-de': "Camaub"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'fr-fr': "Éruption",
			'en-us': "Eruption",
			'es-es': "Estallido",
			'it-it': "Eruzione",
			'pt-br': "Erupção",
			'de-de': "Eruption"
		},

		effect: {
			'fr-fr': "Défaussez la carte du dessus du deck de chaque joueur. Cette attaque inflige 100 dégâts supplémentaires pour chaque carte Énergie défaussée de cette façon.",
			'en-us': "Discard the top card of each player's deck. This attack does 100 more damage for each Energy card discarded in this way.",
			'es-es': "Descarta la primera carta de la baraja de cada jugador. Este ataque hace 100 puntos de daño más por cada carta de Energía descartada de esta manera.",
			'it-it': "Scarta la prima carta del mazzo di ciascun giocatore. Questo attacco infligge 100 danni in più per ogni carta Energia scartata in questo modo.",
			'pt-br': "Descarte a carta de cima do baralho de cada jogador. Este ataque causa 100 pontos de dano a mais para cada carta de Energia descartada desta forma.",
			'de-de': "Lege die oberste Karte des Decks jedes Spielers auf seinen Ablagestapel. Diese Attacke fügt für jede Energiekarte, die auf diese Weise auf den Ablagestapel gelegt wurde, 100 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'fr-fr': "Piétinement Fumant",
			'en-us': "Steaming Stomp",
			'es-es': "Pisotón Humeante",
			'it-it': "Pestata Incandescente",
			'pt-br': "Pisoteada Fumegante",
			'de-de': "Dampfstampfer"
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "It lives in the crater of a volcano. It is well known that the humps on its back erupt every 10 years.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725112,
				tcgplayer: 509728,
				cardtrader: 255592
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725112,
				tcgplayer: 509728,
				cardtrader: 255592
			}
		},
	],

	illustrator: "Shiburingaru",

	
}

export default card
