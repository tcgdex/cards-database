import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [721],
	set: Set,

	name: {
		'fr-fr': "Volcanion",
		'en-us': "Volcanion",
		'es-es': "Volcanion",
		'it-it': "Volcanion",
		'pt-br': "Volcanion",
		'de-de': "Volcanion"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	attacks: [{
		name: {
			'fr-fr': "Enfoncement",
			'en-us': "Hammer In",
			'es-es': "Martillear",
			'it-it': "Martello",
			'pt-br': "Martelada",
			'de-de': "Einhämmern"
		},

		damage: 50,
		cost: ["Water", "Colorless"]
	}, {
		name: {
			'fr-fr': "Vapeur Explosive",
			'en-us': "Dynamite Steam",
			'es-es': "Vapor Dinamita",
			'it-it': "Vapordinamite",
			'pt-br': "Vapor de Dinamite",
			'de-de': "Dynamitdampf"
		},

		effect: {
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 120 dégâts pour chaque côté face.",
			'en-us': "Flip 2 coins. This attack does 120 damage for each heads.",
			'es-es': "Lanza 2 monedas. Este ataque hace 120 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 120 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 120 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 120 Schadenspunkte pro Kopf zu."
		},

		damage: "120×",
		cost: ["Water", "Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "It expels its internal steam from the arms on its back. It has enough power to blow away a mountain."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 539148,
				tcgplayer: 232427
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 539148,
				tcgplayer: 232427
			}
		},
	],
}

export default card
