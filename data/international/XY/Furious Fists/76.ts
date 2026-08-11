import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Flygon",
		'fr-fr': "Libégon",
		'es-es': "Flygon",
		'it-it': "Flygon",
		'pt-br': "Flygon",
		'de-de': "Libelldra"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		330,
	],

	hp: 130,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Vibrava",
		'fr-fr': "Vibraninf",
		'es-es': "Vibrava",
		'it-it': "Vibrava",
		'pt-br': "Vibrava",
		'de-de': "Vibrava"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Rainbow Shower",
				'fr-fr': "Averse Arc-En-Ciel",
				'es-es': "Ducha Arcoíris",
				'it-it': "Pioggiarcobaleno",
				'pt-br': "Ducha Arco-Íris",
				'de-de': "Regenbogenschauer"
			},
			effect: {
				'en-us': "Attach as many basic Energy cards as you like from your hand to your Pokémon in any way you like.",
				'fr-fr': "Attachez autant d'Énergies de base que vous voulez de votre main à vos Pokémon, de la manière que vous voulez.",
				'es-es': "Une tantas cartas de Energía Básica como quieras de tu mano a tus Pokémon de la manera que desees.",
				'it-it': "Assegna a piacimento ai tuoi Pokémon tutte le carte Energia base che vuoi dalla tua mano.",
				'pt-br': "Ligue tantos cards de Energia básica quanto quiser da sua mão a seus Pokémon no Banco do jeito que desejar.",
				'de-de': "Lege beliebig viele Basis-Energiekarten von deiner Hand nach Belieben an deine Pokémon an."
			},

		},
		{
			cost: [
				"Grass",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Sand Sweep",
				'fr-fr': "Balayette Sablonneuse",
				'es-es': "Barrido de Arena",
				'it-it': "Spazzasabbia",
				'pt-br': "Varredura de Areia",
				'de-de': "Sandfeger"
			},
			effect: {
				'en-us': "Heal 30 damage from each of your Pokémon that has any Energy attached to it.",
				'fr-fr': "Soignez 30 dégâts à chacun de vos Pokémon auquel de l'Énergie est attachée.",
				'es-es': "Cura 30 puntos de daño a cada uno de tus Pokémon que tenga alguna Energía unida a él.",
				'it-it': "Cura da 30 danni ciascuno dei tuoi Pokémon che abbia delle Energie assegnate.",
				'pt-br': "Cure 30 de danos de cada um dos seus Pokémon que possua qualquer Energia ligada a ele.",
				'de-de': "Heile 30 Schadenspunkte bei jedem deiner Pokémon, an das Energie angelegt ist."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It hides itself by kicking up desert sand with its wings. Red covers shield its eyes from sand.",
	},

	thirdParty: {
		cardmarket: 281740,
		tcgplayer: 92256
	}
}

export default card
