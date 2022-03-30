import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Camerupt",
		fr: "Camérupt",
		es: "Camerupt",
		it: "Camerupt",
		pt: "Camerupt",
		de: "Camerupt"
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
		en: "Numel",
		fr: "Chamallot",
		es: "Numel",
		it: "Numel",
		pt: "Numel",
		de: "Camaub"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
				es: "Apisonar",
				it: "Carica",
				pt: "Aríete",
				de: "Ramme"
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
				en: "Eruption",
				fr: "Éruption",
				es: "Estallido",
				it: "Eruzione",
				pt: "Erupção",
				de: "Eruption"
			},
			effect: {
				en: "Each player discards the top card of his or her deck. This attack does 60 more damage for each Energy card discarded in this way.",
				fr: "Chaque joueur défausse la carte du dessus de son deck. Cette attaque inflige 60 dégâts supplémentaires pour chaque carte Énergie défaussée de cette façon.",
				es: "Cada jugador descarta la primera carta de su baraja. Este ataque hace 60 puntos de daño más por cada carta de Energía descartada de esta manera.",
				it: "Ciascun giocatore scarta la prima carta del proprio mazzo. Questo attacco infligge 60 danni in più per ogni carta Energia scartata in questo modo.",
				pt: "Cada jogador descarta o card de cima do próprio baralho. Este ataque causa 60 de danos adicionais para cada card de Energia descartado desta forma.",
				de: "Jeder Spieler legt die oberste Karte seines Decks auf seinen Ablagestapel. Dieser Angriff fügt 60 weitere Schadenspunkte für jede Energie zu, die auf diese Weise auf den Ablagestapel gelegt wurde."
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



}

export default card
