import { Card } from 'models/database/card'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		'en-us': "Darmanitan",
		'fr-fr': "Darumacho",
		'es-es': "Darmanitan",
		'it-it': "Darmanitan",
		'pt-br': "Darmanitan",
		'de-de': "Flampivian"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		555,
	],

	hp: 130,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Darumaka",
		'fr-fr': "Darumarond",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Heat Assist",
				'fr-fr': "Assistance Fervente",
				'es-es': "Asistencia de Calor",
				'it-it': "Fuocaiuto",
				'pt-br': "Assistência de Calor",
				'de-de': "Hitzeförderung"
			},
			effect: {
				'en-us': "Attach up to 3 Fire Energy cards from your hand to your Pokémon in any way you like.",
				'fr-fr': "Attachez jusqu’à 3 cartes Énergie Fire de votre main à vos Pokémon, de la manière que vous voulez.",
				'es-es': "Une hasta 3 cartas de Energía Fire de tu mano a tus Pokémon de la manera que desees.",
				'it-it': "Assegna a piacimento ai tuoi Pokémon fino a tre carte Energia Fire dalla tua mano.",
				'pt-br': "Ligue até 3 cartas de Energia Fire da sua mão aos seus Pokémon como desejar.",
				'de-de': "Lege bis zu 3 Fire-Energiekarten aus deiner Hand beliebig an deine Pokémon an."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Darmani-Hands",
				'fr-fr': "Daru-Mains",
				'es-es': "Puños Darmanitas",
				'it-it': "Darmani-Mani",
				'pt-br': "Darmanimãos",
				'de-de': "Flampivi-Hände"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 50 more damage for each heads.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 50 dégâts supplémentaires pour chaque côté face.",
				'es-es': "Lanza 4 monedas. Este ataque hace 50 puntos de daño más por cada cara.",
				'it-it': "Lancia quattro volte una moneta. Questo attacco infligge 50 danni in più ogni volta che esce testa.",
				'pt-br': "Jogue 4 moedas. Este ataque causa 50 pontos de dano a mais para cada cara.",
				'de-de': "Wirf 4 Münzen. Diese Attacke fügt 50 Schadenspunkte mehr pro Kopf zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its internal fire burns at 2,500 degrees Fahrenheit, making enough power that it can destroy a dump truck with one punch.",
	},

	thirdParty: {
		cardmarket: 363481,
		tcgplayer: 175277
	}
}

export default card
