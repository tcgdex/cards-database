import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Rayquaza δ",
		'fr-fr': "Rayquaza δ",
		'de-de': "Rayquaza"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		384,
	],

	hp: 90,

	types: [
		"Lightning",
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Delta Guard",
				'fr-fr': "Garde Delta",
				'de-de': "Delta-Wache"
			},
			effect: {
				'en-us': "As long as Rayquaza has any Holon Energy cards attached to it, ignore the effect of Rayquaza's Lightning Storm attack.",
				'fr-fr': "Tant que Rayquaza possède des cartes Énergie Holon, ignorez l'effet de son attaque Orage d'éclairs.",
				'de-de': "Solange an Rayquaza eine Holon-Energiekarte angelegt ist, ignoriere den Effekt von Rayquazas Blitzsturm Angriff."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Power Blow",
				'fr-fr': "Coup puissant",
				'de-de': "Mächtiger Schlag"
			},
			effect: {
				'en-us': "Does 10 damage times the amount of Energy attached to Rayquaza.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre total d'Énergie attachée à Rayquaza.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Rayquaza angelegte Energie zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Lightning",
				"Metal",
				"Colorless",
				"Colorless",
			],

			name: {
				'en-us': "Lightning Storm",
				'fr-fr': "Orage d'éclairs",
				'de-de': "Blitzsturm"
			},

			effect: {
				'en-us': "Put 7 damage counters on Rayquaza.",
				'fr-fr': "Placez 7 marqueurs de dégât sur Rayquaza.",
				'de-de': "Lege 7 Schadensmarken auf Rayquaza."
			},

			damage: 70
		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 3,

	thirdParty: {
		cardmarket: 276776
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
