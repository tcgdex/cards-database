import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Vanillite",
		'fr-fr': "Sorbébé",
		'es-es': "Vanillite",
		'it-it': "Vanillite",
		'pt-br': "Vanillite",
		'de-de': "Gelatini"
	},

	illustrator: "OOYAMA",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		582,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Triple Spin",
				'fr-fr': "Triple Tour",
				'es-es': "Triple Giro",
				'it-it': "Triploturbo",
				'pt-br': "Giro Triplo",
				'de-de': "Dreifachdreher"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 10 damage for each heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara.",
				'it-it': "Lancia tre volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
				'pt-br': "Jogue 3 moedas. Este ataque causa 10 pontos de dano para cada cara.",
				'de-de': "Wirf 3 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Born of an icicle, this Pokémon uses its frosty breath to make ice crystals, causing snow to fall.",
	},

	thirdParty: {
		cardmarket: 297495,
		tcgplayer: 130933
	}
}

export default card
