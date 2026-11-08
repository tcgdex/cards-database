import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Exeggcute",
		'fr-fr': "Noeunoeuf",
		'es-es': "Exeggcute",
		'it-it': "Exeggcute",
		'pt-br': "Exeggcute",
		'de-de': "Owei"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		102,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Bullet Seed",
				'fr-fr': "Balle Graine",
				'es-es': "Recurrente",
				'it-it': "Semitraglia",
				'pt-br': "Projétil de Semente",
				'de-de': "Kugelsaat"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 10 damage for each heads.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
				'es-es': "Lanza 4 monedas. Este ataque hace 10 puntos de daño por cada cara.",
				'it-it': "Lancia quattro volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
				'pt-br': "Jogue 4 moedas. Este ataque causa 10 pontos de dano para cada cara.",
				'de-de': "Wirf 4 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Six of them form a single Pokémon. Should one of the six be lost, the next morning there will once more be six.",
	},

	thirdParty: {
		cardmarket: 368941,
		tcgplayer: 183779
	}
}

export default card
