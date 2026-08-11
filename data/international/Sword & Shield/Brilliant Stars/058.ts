import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [343],
	set: Set,

	name: {
		'en-us': "Baltoy",
		'fr-fr': "Balbuto",
		'es-es': "Baltoy",
		'it-it': "Baltoy",
		'pt-br': "Baltoy",
		'de-de': "Puppance"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Triple Spin",
			'fr-fr': "Triple Tour",
			'es-es': "Triple Giro",
			'it-it': "Triploturbo",
			'pt-br': "Giro Triplo",
			'de-de': "Dreifachdreher"
		},

		effect: {
			'en-us': "Flip 3 coins. This attack does 20 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
			'es-es': "Lanza 3 monedas. Este ataque hace 20 puntos de daño por cada cara.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 20 pontos de dano para cada cara.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu."
		},

		damage: "20×"
	}],

	weaknesses: [
		{
			type: "Darkness",
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
		'en-us': "It moves while spinning around on its single foot. Some Baltoy have been seen spinning on their heads.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608508,
				tcgplayer: 263774
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608508,
				tcgplayer: 263774
			}
		},
	],
}

export default card
