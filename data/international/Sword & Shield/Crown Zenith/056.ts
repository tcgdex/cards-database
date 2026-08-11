import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [871],
	set: Set,

	name: {
		'en-us': "Pincurchin",
		'fr-fr': "Wattapik",
		'es-es': "Pincurchin",
		'it-it': "Pincurchin",
		'pt-br': "Pincurchin",
		'de-de': "Britzigel"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Call for Family",
			'fr-fr': "Appel à la Famille",
			'es-es': "Llamar a la Familia",
			'it-it': "Cerca Famiglia",
			'pt-br': "Chamar a Família",
			'de-de': "Familienruf"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Cherchez jusqu'à 2 Pokémon de base dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Continuous Tumble",
			'fr-fr': "Roulade Continue",
			'es-es': "Avalancha Continua",
			'it-it': "Capriole",
			'pt-br': "Tombo Contínuo",
			'de-de': "Dauerrollen"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño más por cada cara.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 30 danni in più ogni volta che esce testa.",
			'pt-br': "Jogue 1 moeda até sair coroa. Este ataque causa 30 pontos de dano a mais para cada cara.",
			'de-de': "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 30 Schadenspunkte mehr pro Kopf zu."
		},

		damage: "30+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It feeds on seaweed, using its teeth to scrape it off rocks. Electric current flows from the tips of its spines.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691773,
				tcgplayer: 478170
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691773,
				tcgplayer: 478170
			}
		},
	],
}

export default card
