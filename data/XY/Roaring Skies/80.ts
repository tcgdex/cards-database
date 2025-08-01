import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Unfezant",
		fr: "Déflaisan",
		es: "Unfezant",
		it: "Unfezant",
		pt: "Unfezant",
		de: "Fasasnob"
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
		en: "Tranquill",
		fr: "Colombeau",
		es: "Tranquill",
		it: "Tranquill",
		pt: "Tranquill",
		de: "Navitaub"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-Attaque",
				es: "Ataque Rápido",
				it: "Attacco Rapido",
				pt: "Ataque Rápido",
				de: "Ruckzuckhieb"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				pt: "Jogue uma moeda. Se sair cara, este ataque causará 30 de danos adicionais.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu."
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
				en: "Strong Winds",
				fr: "Vents Tourbillonnants",
				es: "Fuertes Vientos",
				it: "Turbovento",
				pt: "Ventos Fortes",
				de: "Turbulenter Wind"
			},
			effect: {
				en: "Shuffle all cards attached to each player's Pokémon into that player's deck.",
				fr: "Mélangez toutes les cartes attachées aux Pokémon de chaque joueur au deck de ce joueur.",
				es: "Poned todas las cartas unidas a los Pokémon de cada jugador en su respectiva baraja, y barajadlas todas.",
				it: "Rimischia tutte le carte assegnate ai Pokémon di ciascun giocatore nel mazzo di quel giocatore.",
				pt: "Embaralhe todos os cards ligados aos Pokémon de cada jogador no baralho daquele jogador.",
				de: "Mische alle Karten, die an den Pokémon beider Spieler angelegt sind, zurück in die Decks der Spieler."
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

	thirdParty: {
		cardmarket: 282748
	}
}

export default card
