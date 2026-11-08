import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Weepinbell",
		'fr-fr': "Boustiflor",
		'es-es': "Weepinbell",
		'it-it': "Weepinbell",
		'pt-br': "Weepinbell",
		'de-de': "Ultrigaria"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		70,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Bellsprout",
		'fr-fr': "Chétiflor",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Growth",
				'fr-fr': "Croissance",
				'es-es': "Desarrollo",
				'it-it': "Crescita",
				'pt-br': "Crescimento",
				'de-de': "Wachstum"
			},
			effect: {
				'en-us': "Attach up to 2 Grass Energy cards from your hand to this Pokémon.",
				'fr-fr': "Attachez jusqu’à 2 cartes Énergie Grass de votre main à ce Pokémon.",
				'es-es': "Une hasta 2 cartas de Energía Grass de tu mano a este Pokémon.",
				'it-it': "Assegna a questo Pokémon fino a due carte Energia Grass dalla tua mano.",
				'pt-br': "Ligue até 2 cartas de Energia Grass da sua mão a este Pokémon.",
				'de-de': "Lege bis zu 2 Grass-Energiekarten aus deiner Hand an dieses Pokémon an."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Double Razor Leaf",
				'fr-fr': "Double Tranch’Herb",
				'es-es': "Doble Hoja Afilada",
				'it-it': "Doppie Foglielama",
				'pt-br': "Folha Navalha Dupla",
				'de-de': "Doppel-Rasierblatt"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 30 pontos de dano para cada cara.",
				'de-de': "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
			},
			damage: "30×",

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
		'en-us': "It spits out Poison Powder to immobilize the enemy and then finishes it with a spray of Acid.",
	},

	thirdParty: {
		cardmarket: 361249,
		tcgplayer: 170807
	}
}

export default card
