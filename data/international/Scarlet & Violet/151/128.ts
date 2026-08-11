import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [128],
	set: Set,

	name: {
		'fr-fr': "Tauros",
		'en-us': "Tauros",
		'es-es': "Tauros",
		'it-it': "Tauros",
		'pt-br': "Tauros",
		'de-de': "Tauros"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Réunion des Troupes",
			'en-us': "Gather the Crew",
			'es-es': "Juntar al Equipo",
			'it-it': "Squadra a Raccolta",
			'pt-br': "Juntar a Galera",
			'de-de': "Alle an Bord"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck un Pokémon de base, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
			'en-us': "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
			'es-es': "Busca en tu baraja 1 Pokémon Básico y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo un Pokémon Base e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por um Pokémon Básico no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Basis-Pokémon und lege es auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Frénésie",
			'en-us': "Rage",
			'es-es': "Furia",
			'it-it': "Ira",
			'pt-br': "Ira",
			'de-de': "Raserei"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
			'en-us': "This attack does 10 more damage for each damage counter on this Pokémon.",
			'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
			'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
			'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "When it targets an enemy, it charges furiously while whipping its body with its long tails.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733723,
				tcgplayer: 516691,
				cardtrader: 261220
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733723,
				tcgplayer: 516691,
				cardtrader: 261220
			}
		},
	],

	illustrator: "Takeshi Nakamura",

	
}

export default card
