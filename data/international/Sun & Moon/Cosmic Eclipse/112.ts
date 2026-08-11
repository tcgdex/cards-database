import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Armaldo",
		'fr-fr': "Armaldo",
		'es-es': "Armaldo",
		'it-it': "Armaldo",
		'pt-br': "Armaldo",
		'de-de': "Armaldo"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		348,
	],

	hp: 150,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Anorith",
		'fr-fr': "Anorith",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ancient Blast",
				'fr-fr': "Explosion Ancestrale",
				'es-es': "Sacudida Ancestral",
				'it-it': "Antica Esplosione",
				'pt-br': "Explosão Arcaica",
				'de-de': "Uralte Eruption"
			},
			effect: {
				'en-us': "This attack does 50 more damage for each Unidentified Fossil card in your discard pile.",
				'fr-fr': "Cette attaque inflige 50 dégâts supplémentaires pour chaque carte Fossile Inconnu dans votre pile de défausse.",
				'es-es': "Este ataque hace 50 puntos de daño más por cada carta de Fósil Desconocido en tu pila de descartes.",
				'it-it': "Questo attacco infligge 50 danni in più per ogni carta Fossile Sconosciuto nella tua pila degli scarti.",
				'pt-br': "Este ataque causa 50 pontos de dano a mais para cada carta Fóssil Não Identificado na sua pilha de descarte.",
				'de-de': "Diese Attacke fügt 50 Schadenspunkte mehr mal der Anzahl der Unbekanntes Fossil-Karten in deinem Ablagestapel zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mach Claw",
				'fr-fr': "Instagriffe",
				'es-es': "Garra Mach",
				'it-it': "Artiglio Mach",
				'pt-br': "Garra Supersônica",
				'de-de': "Tempoklaue"
			},
			effect: {
				'en-us': "This attack’s damage isn’t affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
				'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
				'pt-br': "O dano deste ataque não é afetado por Resistência.",
				'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It lived on land and went out into the sea to hunt for prey. Its sharp claws were its greatest weapon.",
	},

	thirdParty: {
		cardmarket: 408209,
		tcgplayer: 201144
	}
}

export default card
