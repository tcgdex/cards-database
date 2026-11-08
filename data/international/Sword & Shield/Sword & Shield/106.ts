import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Mudsdale",
		'fr-fr': "Bourrinos",
		'es-es': "Mudsdale",
		'it-it': "Mudsdale",
		'pt-br': "Mudsdale",
		'de-de': "Pampross"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 150,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Mudbray",
		'fr-fr': "Tiboudet",
		'es-es': "Mudbray",
		'it-it': "Mudbray",
		'pt-br': "Mudbray",
		'de-de': "Pampuli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Double Impact",
				'fr-fr': "Double Impact",
				'es-es': "Impacto Doble",
				'it-it': "Doppio Impatto",
				'pt-br': "Impacto Duplo",
				'de-de': "Doppelter Einschlag"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 120 damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 120 dégâts pour chaque côté face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 120 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 120 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 120 pontos de dano para cada cara.",
				'de-de': "Wirf 2 Münzen. Diese Attacke fügt 120 Schadenspunkte pro Kopf zu."
			},
			damage: "120×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "Mud that hardens around a Mudsdale's legs sets harder than stone. It's so hard that it allows this Pokémon to scrap a truck with a single kick."
	},

	dexId: [750],

	thirdParty: {
		cardmarket: 436649,
		tcgplayer: 208415
	}
}

export default card
