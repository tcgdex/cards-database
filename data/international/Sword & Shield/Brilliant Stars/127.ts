import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [701],
	set: Set,

	name: {
		'en-us': "Hawlucha",
		'fr-fr': "Brutalibré",
		'es-es': "Hawlucha",
		'it-it': "Hawlucha",
		'pt-br': "Hawlucha",
		'de-de': "Resladero"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Showboating Pose",
			'fr-fr': "Pose Vantarde",
			'es-es': "Pose de Alarde",
			'it-it': "Posa Ostentata",
			'pt-br': "Se Achando",
			'de-de': "Angeberpose"
		},

		effect: {
			'en-us': "Attach up to 2 basic Energy cards from your discard pile to 1 of your Benched Pokémon.",
			'fr-fr': "Attachez jusqu'à 2 cartes Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
			'es-es': "Une hasta 2 cartas de Energía Básica de tu pila de descartes a 1 de tus Pokémon en Banca.",
			'it-it': "Assegna a uno dei tuoi Pokémon in panchina fino a due carte Energia base dalla tua pila degli scarti.",
			'pt-br': "Ligue até 2 cartas de Energia básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
			'de-de': "Lege bis zu 2 Basis-Energiekarten aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
		}
	}, {
		cost: ["Colorless"],

		name: {
			'en-us': "Cross-Cut",
			'fr-fr': "Coupe Transversale",
			'es-es': "Atajar",
			'it-it': "Fendente Incrociato",
			'pt-br': "Corte em Cruz",
			'de-de': "Überkreuzzerschneider"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 30 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 30 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 30 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 30 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 30 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It drives its opponents to exhaustion with its agile maneuvers, then ends the fight with a flashy finishing move.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608673,
				tcgplayer: 263850
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608673,
				tcgplayer: 263850
			}
		},
	],
}

export default card
