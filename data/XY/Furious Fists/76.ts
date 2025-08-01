import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Flygon",
		fr: "Libégon",
		es: "Flygon",
		it: "Flygon",
		pt: "Flygon",
		de: "Libelldra"
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
		en: "Vibrava",
		fr: "Vibraninf",
		es: "Vibrava",
		it: "Vibrava",
		pt: "Vibrava",
		de: "Vibrava"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rainbow Shower",
				fr: "Averse Arc-En-Ciel",
				es: "Ducha Arcoíris",
				it: "Pioggiarcobaleno",
				pt: "Ducha Arco-Íris",
				de: "Regenbogenschauer"
			},
			effect: {
				en: "Attach as many basic Energy cards as you like from your hand to your Pokémon in any way you like.",
				fr: "Attachez autant d'Énergies de base que vous voulez de votre main à vos Pokémon, de la manière que vous voulez.",
				es: "Une tantas cartas de Energía Básica como quieras de tu mano a tus Pokémon de la manera que desees.",
				it: "Assegna a piacimento ai tuoi Pokémon tutte le carte Energia base che vuoi dalla tua mano.",
				pt: "Ligue tantos cards de Energia básica quanto quiser da sua mão a seus Pokémon no Banco do jeito que desejar.",
				de: "Lege beliebig viele Basis-Energiekarten von deiner Hand nach Belieben an deine Pokémon an."
			},

		},
		{
			cost: [
				"Grass",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Sand Sweep",
				fr: "Balayette Sablonneuse",
				es: "Barrido de Arena",
				it: "Spazzasabbia",
				pt: "Varredura de Areia",
				de: "Sandfeger"
			},
			effect: {
				en: "Heal 30 damage from each of your Pokémon that has any Energy attached to it.",
				fr: "Soignez 30 dégâts à chacun de vos Pokémon auquel de l'Énergie est attachée.",
				es: "Cura 30 puntos de daño a cada uno de tus Pokémon que tenga alguna Energía unida a él.",
				it: "Cura da 30 danni ciascuno dei tuoi Pokémon che abbia delle Energie assegnate.",
				pt: "Cure 30 de danos de cada um dos seus Pokémon que possua qualquer Energia ligada a ele.",
				de: "Heile 30 Schadenspunkte bei jedem deiner Pokémon, an das Energie angelegt ist."
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

	thirdParty: {
		cardmarket: 281740
	}
}

export default card
