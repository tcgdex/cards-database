import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Unfezant",
		'fr-fr': "Déflaisan",
		'es-es': "Unfezant",
		'it-it': "Unfezant",
		'pt-br': "Unfezant",
		'de-de': "Fasasnob"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		521,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Tranquill",
		'fr-fr': "Colombeau",
		'es-es': "Tranquill",
		'it-it': "Tranquill",
		'pt-br': "Tranquill",
		'de-de': "Navitaub"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Quick Attack",
				'fr-fr': "Vive-Attaque",
				'es-es': "Ataque Rápido",
				'it-it': "Attacco Rapido",
				'pt-br': "Ataque Rápido",
				'de-de': "Ruckzuckhieb"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 30 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Strong Winds",
				'fr-fr': "Vents Tourbillonnants",
				'es-es': "Fuertes Vientos",
				'it-it': "Turbovento",
				'pt-br': "Ventos Fortes",
				'de-de': "Turbulenter Wind"
			},
			effect: {
				'en-us': "Shuffle all cards attached to each player's Pokémon into that player's deck.",
				'fr-fr': "Mélangez toutes les cartes attachées aux Pokémon de chaque joueur au deck de ce joueur.",
				'es-es': "Poned todas las cartas unidas a los Pokémon de cada jugador en su respectiva baraja, y barajadlas todas.",
				'it-it': "Rimischia tutte le carte assegnate ai Pokémon di ciascun giocatore nel mazzo di quel giocatore.",
				'pt-br': "Embaralhe todos os cards ligados aos Pokémon de cada jogador no baralho daquele jogador.",
				'de-de': "Mische alle Karten, die an den Pokémon beider Spieler angelegt sind, zurück in die Decks der Spieler."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Males have plumage on their heads. They will never let themselves fell close to anyone other than their Trainers.",
	},

	thirdParty: {
		cardmarket: 282748,
		tcgplayer: 98116
	}
}

export default card
