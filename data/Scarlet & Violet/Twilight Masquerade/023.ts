import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		en: "Sinistcha ex",
		fr: "Théffroyable-ex",
		es: "Sinistcha ex",
		it: "Sinistcha-ex",
		pt: "Sinistcha ex",
		de: "Fatalitcha-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 240,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Re-Brew",
			fr: "Ré-Infusion",
			es: "Infusión Doble",
			it: "Nuova Infusione",
			pt: "Reinfusão",
			de: "Zweiter Aufguss"
		},

		effect: {
			en: "Put 2 damage counters on 1 of your opponent's Pokémon for each Basic Grass Energy card in your discard pile. Then, shuffle those Energy cards into your deck.",
			fr: "Placez 2 marqueurs de dégâts sur l'un des Pokémon de votre adversaire pour chaque carte Énergie Grass de base dans votre pile de défausse. Mélangez ensuite ces cartes Énergie avec votre deck.",
			es: "Pon 2 contadores de daño en uno de los Pokémon de tu rival por cada carta de Energía Grass Básica en tu pila de descartes. Después, pon esas cartas de Energía en tu baraja y barájalas todas.",
			it: "Metti due segnalini danno su uno dei Pokémon del tuo avversario per ogni carta Energia base Grass nella tua pila degli scarti. Poi rimischia quelle carte Energia nel tuo mazzo.",
			pt: "Coloque 2 contadores de dano em 1 dos Pokémon do seu oponente para cada carta de Energia Grass Básica na sua pilha de descarte. Em seguida, embaralhe aquelas cartas de Energia no seu baralho.",
			de: "Lege 2 Schadensmarken für jede Basis-Grass-Energiekarte in deinem Ablagestapel auf 1 Pokémon deines Gegners. Mische anschließend jene Energiekarten in dein Deck."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Matcha Splash",
			fr: "Éclaboussure Matcha",
			es: "Mancha de Matcha",
			it: "Schizzatè",
			pt: "Salpicar Matcha",
			de: "Matcha-Platscher"
		},

		effect: {
			en: "Heal 30 damage from each of your Pokémon.",
			fr: "Soignez 30 dégâts de chacun de vos Pokémon.",
			es: "Cura 30 puntos de daño a cada uno de tus Pokémon.",
			it: "Cura ciascuno dei tuoi Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano de cada um dos seus Pokémon.",
			de: "Heile 30 Schadenspunkte bei jedem deiner Pokémon."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card