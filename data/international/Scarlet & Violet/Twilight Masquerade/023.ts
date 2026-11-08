import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [1013],
	set: Set,

	name: {
		'en-us': "Sinistcha ex",
		'fr-fr': "Théffroyable-ex",
		'es-es': "Sinistcha ex",
		'it-it': "Sinistcha-ex",
		'pt-br': "Sinistcha ex",
		'de-de': "Fatalitcha-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 240,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Poltchageist",
		'fr-fr': "Poltchageist",
		'es-es': "Poltchageist",
		'it-it': "Poltchageist",
		'pt-br': "Poltchageist",
		'de-de': "Mortcha"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Re-Brew",
			'fr-fr': "Ré-Infusion",
			'es-es': "Infusión Doble",
			'it-it': "Nuova Infusione",
			'pt-br': "Reinfusão",
			'de-de': "Zweiter Aufguss"
		},

		effect: {
			'en-us': "Put 2 damage counters on 1 of your opponent's Pokémon for each Basic {G} Energy card in your discard pile. Then, shuffle those Energy cards into your deck.",
			'fr-fr': "Placez 2 marqueurs de dégâts sur l'un des Pokémon de votre adversaire pour chaque carte Énergie {G} de base dans votre pile de défausse. Mélangez ensuite ces cartes Énergie avec votre deck.",
			'es-es': "Pon 2 contadores de daño en uno de los Pokémon de tu rival por cada carta de Energía {G} Básica en tu pila de descartes. Después, pon esas cartas de Energía en tu baraja y barájalas todas.",
			'it-it': "Metti due segnalini danno su uno dei Pokémon del tuo avversario per ogni carta Energia base {G} nella tua pila degli scarti. Poi rimischia quelle carte Energia nel tuo mazzo.",
			'pt-br': "Coloque 2 contadores de dano em 1 dos Pokémon do seu oponente para cada carta de Energia {G} Básica na sua pilha de descarte. Em seguida, embaralhe aquelas cartas de Energia no seu baralho.",
			'de-de': "Lege 2 Schadensmarken für jede Basis-{G}-Energiekarte in deinem Ablagestapel auf 1 Pokémon deines Gegners. Mische anschließend jene Energiekarten in dein Deck."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Matcha Splash",
			'fr-fr': "Éclaboussure Matcha",
			'es-es': "Mancha de Matcha",
			'it-it': "Schizzatè",
			'pt-br': "Salpicar Matcha",
			'de-de': "Matcha-Platscher"
		},

		effect: {
			'en-us': "Heal 30 damage from each of your Pokémon.",
			'fr-fr': "Soignez 30 dégâts de chacun de vos Pokémon.",
			'es-es': "Cura 30 puntos de daño a cada uno de tus Pokémon.",
			'it-it': "Cura ciascuno dei tuoi Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano de cada um dos seus Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei jedem deiner Pokémon."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 769197,
				tcgplayer: 550067
			}
		},
	],

	suffix: "ex",
	illustrator: "aky CG Works",

}

export default card