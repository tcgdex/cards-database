import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [479],
	set: Set,

	name: {
		'en-us': "Rotom",
		'fr-fr': "Motisma",
		'es-es': "Rotom",
		'it-it': "Rotom",
		'pt-br': "Rotom",
		'de-de': "Rotom"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Sekio",

	description: {
		'en-us': "With a body made of plasma, it can inhabit all sorts of machines. It loves to surprise others."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Surprise Short",
			'fr-fr': "Court-Circuit Surprise",
			'de-de': "Überraschender Kurzschluss",
			'es-es': "Cortocircuito Sorpresa",
			'pt-br': "Curto-circuito Surpresa",
			'it-it': "Cortocircuito a Sorpresa"
		},

		effect: {
			'en-us': "Discard all Pokémon Tools from all of your opponent's Pokémon.",
			'fr-fr': "Défaussez tous les Outils Pokémon de tous les Pokémon de votre adversaire.",
			'de-de': "Lege alle Pokémon-Ausrüstungen von allen Pokémon deines Gegners auf den Ablagestapel.",
			'es-es': "Descarta todas las Herramientas Pokémon de todos los Pokémon de tu rival.",
			'pt-br': "Descarte todas as Ferramentas Pokémon de todos os Pokémon do seu oponente.",
			'it-it': "Scarta tutte le carte Oggetto Pokémon da tutti i Pokémon del tuo avversario."
		}
	}, {
		cost: ["Lightning"],

		name: {
			'en-us': "Static Shock",
			'fr-fr': "Choc Statique",
			'de-de': "Statischer Schock",
			'es-es': "Impacto Estático",
			'pt-br': "Choque de Estática",
			'it-it': "Shock Statico"
		},

		damage: 30
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582487,
				tcgplayer: 253250
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582487,
				tcgplayer: 253250
			}
		},
	],
}

export default card
