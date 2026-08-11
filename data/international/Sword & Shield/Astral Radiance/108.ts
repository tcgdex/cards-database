import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [379],
	set: Set,

	name: {
		'en-us': "Registeel",
		'fr-fr': "Registeel",
		'es-es': "Registeel",
		'it-it': "Registeel",
		'pt-br': "Registeel",
		'de-de': "Registeel"
	},

	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Regi Gate",
			'fr-fr': "Porte Regi",
			'es-es': "Regi Puerta",
			'it-it': "Portale Regi",
			'pt-br': "Portal Regi",
			'de-de': "Regi-Pforte"
		},

		effect: {
			'en-us': "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck un Pokémon de base, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 Pokémon Básico y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo un Pokémon Base e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por 1 Pokémon Básico no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Basis-Pokémon und lege es auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Heavy Slam",
			'fr-fr': "Tacle Lourd",
			'es-es': "Cuerpo Pesado",
			'it-it': "Pesobomba",
			'pt-br': "Golpe Pesado",
			'de-de': "Rammboss"
		},

		effect: {
			'en-us': "This attack does 50 less damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
			'fr-fr': "Cette attaque inflige 50 dégâts de moins pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 50 puntos de daño menos por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 50 danni in meno per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 50 pontos de dano a menos para cada Colorless no custo de Recuo do Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jedes Colorless in den Rückzugskosten des Aktiven Pokémon deines Gegners 50 Schadenspunkte weniger zu."
		},

		damage: "220-"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "Registeel's body is made of a strange material that is flexible enough to stretch and shrink but also more durable than any metal.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658769,
				tcgplayer: 272708
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658769,
				tcgplayer: 272708
			}
		},
	],
}

export default card
