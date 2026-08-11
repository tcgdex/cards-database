import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [960],
	set: Set,

	name: {
		'en-us': "Wiglett",
		'fr-fr': "Taupikeau",
		'es-es': "Wiglett",
		'it-it': "Wiglett",
		'pt-br': "Wiglett",
		'de-de': "Schligda"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Fury Headbutt",
			'fr-fr': "Coud'Boule Furieux",
			'es-es': "Cabezazo Furia",
			'it-it': "Testata Furiosa",
			'pt-br': "Cabeçada Furiosa",
			'de-de': "Wütende Kopfnuss"
		},

		effect: {
			'en-us': "Flip 3 coins. This attack does 10 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			'es-es': "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
		},

		damage: "10×"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "This Pokémon can pick up the scent of a Veluza just over 65 feet away and will hide itself in the sand.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740539,
				tcgplayer: 523661,
				cardtrader: 265115
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740539,
				tcgplayer: 523661,
				cardtrader: 265115
			}
		},
	],

	illustrator: "Shibuzoh.",

	
}

export default card
