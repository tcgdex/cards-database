import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Heatran",
		'fr-fr': "Heatran",
		'de-de': "Heatran"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		485,
	],

	hp: 100,

	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Smelt",
				'fr-fr': "Fondre",
				'de-de': "Einschmelzen"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may move a Metal Energy attached to 1 of your Pokémon to Heatran. This power can't be used if Heatran is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez déplacer sur Heatran une Énergie Metal attachée à 1 de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Heatran est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 -Energie, die an 1 deiner Pokémon angelegt ist, an Heatran anlegen. Diese Poké-Power kann nicht benutzt werden, wenn Heatran von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heavy Metal",
				'fr-fr': "Heavy Métal",
				'de-de': "Schwermetall"
			},
			effect: {
				'en-us': "Flip a coin for each Metal Energy attached to Heatran. This attack does 40 damage plus 20 more damage for each heads.",
				'fr-fr': "Lancez une pièce pour chaque Énergie Metal attachée à Heatran. Cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires pour chaque face.",
				'de-de': "Wirf 1 Münze für jede an Heatran angelegte -Energie. Dieser Angriff fügt 40 Schadenspunkte plus 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It dwells in volcanic caves. It digs in with its cross-shaped feet to crawl on ceilings and walls.",
		'fr-fr': "Il hante les grottes volcaniques. Il rampe au mut et au plafond grâce à ses pieds en forme de croix."
	},

	thirdParty: {
		cardmarket: 278155,
		tcgplayer: 86048
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "holo",
			foil: "cosmos"
		},
		{
			type: "normal",
			stamp: ["regional-championships"]
		},
		{
			type: "normal",
			stamp: ["regional-championships","staff"]
		}
	]
}

export default card
