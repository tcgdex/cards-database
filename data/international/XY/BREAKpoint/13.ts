import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Camerupt",
		'fr-fr': "Camérupt",
		'es-es': "Camerupt",
		'it-it': "Camerupt",
		'pt-br': "Camerupt",
		'de-de': "Camerupt"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		323,
	],

	hp: 130,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Numel",
		'fr-fr': "Chamallot",
		'es-es': "Numel",
		'it-it': "Numel",
		'pt-br': "Numel",
		'de-de': "Camaub"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'es-es': "Apisonar",
				'it-it': "Carica",
				'pt-br': "Aríete",
				'de-de': "Ramme"
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Eruption",
				'fr-fr': "Éruption",
				'es-es': "Estallido",
				'it-it': "Eruzione",
				'pt-br': "Erupção",
				'de-de': "Eruption"
			},
			effect: {
				'en-us': "Each player discards the top card of his or her deck. This attack does 60 more damage for each Energy card discarded in this way.",
				'fr-fr': "Chaque joueur défausse la carte du dessus de son deck. Cette attaque inflige 60 dégâts supplémentaires pour chaque carte Énergie défaussée de cette façon.",
				'es-es': "Cada jugador descarta la primera carta de su baraja. Este ataque hace 60 puntos de daño más por cada carta de Energía descartada de esta manera.",
				'it-it': "Ciascun giocatore scarta la prima carta del proprio mazzo. Questo attacco infligge 60 danni in più per ogni carta Energia scartata in questo modo.",
				'pt-br': "Cada jogador descarta o card de cima do próprio baralho. Este ataque causa 60 de danos adicionais para cada card de Energia descartado desta forma.",
				'de-de': "Jeder Spieler legt die oberste Karte seines Decks auf seinen Ablagestapel. Dieser Angriff fügt 60 weitere Schadenspunkte für jede Energie zu, die auf diese Weise auf den Ablagestapel gelegt wurde."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "If angered, the humps on its back erupt in a shower of molten lava. It lives in the craters of volcanoes.",
	},

	thirdParty: {
		cardmarket: 288188,
		tcgplayer: 111516
	}
}

export default card
