import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Steenee",
		'fr-fr': "Candine",
		'es-es': "Steenee",
		'it-it': "Steenee",
		'pt-br': "Steenee",
		'de-de': "Frubaila"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		762,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Bounsweet",
		'fr-fr': "Croquine",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Slap",
				'fr-fr': "Torgnoles",
				'es-es': "Doble Bofetón",
				'it-it': "Doppiasberla",
				'pt-br': "Tapa Duplo",
				'de-de': "Duplexhieb"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 30 pontos de dano para cada cara.",
				'de-de': "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Leaf Step",
				'fr-fr': "Enjambée de Feuillage",
				'es-es': "Paso Hoja",
				'it-it': "Passofoglia",
				'pt-br': "Passo de Folha",
				'de-de': "Blattschritt"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It's protected by its hard sepals, so it plays with bird Pokémon without worry. They peck it relentlessly, but it doesn't care.",
	},

	thirdParty: {
		cardmarket: 387922,
		tcgplayer: 194934
	}
}

export default card
