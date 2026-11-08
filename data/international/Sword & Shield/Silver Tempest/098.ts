import { Card } from "models/database/card"
import Set from "../Silver Tempest"

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

	illustrator: "Teeziro",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Allure",
			'fr-fr': "Allure",
			'es-es': "Atractivo",
			'it-it': "Affascinante",
			'pt-br': "Fascinar",
			'de-de': "Verlockung"
		},

		effect: {
			'en-us': "Draw 2 cards.",
			'fr-fr': "Piochez 2 cartes.",
			'es-es': "Roba 2 cartas.",
			'it-it': "Pesca due carte.",
			'pt-br': "Compre 2 cartas.",
			'de-de': "Ziehe 2 Karten."
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Acrobatics",
			'fr-fr': "Acrobatie",
			'es-es': "Acróbata",
			'it-it': "Acrobazia",
			'pt-br': "Acrobático",
			'de-de': "Akrobatik"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 20 more damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 20 puntos de daño más por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 20 danni in più ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 20 pontos de dano a mais para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte mehr pro Kopf zu."
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
				cardmarket: 682145,
				tcgplayer: 451752
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682145,
				tcgplayer: 451752
			}
		},
	],
}

export default card
