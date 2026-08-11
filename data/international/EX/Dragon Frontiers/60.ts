import { Card } from 'models/database/card'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		'en-us': "Ralts",
		'fr-fr': "Tarsal",
		'de-de': "Trasla"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		280,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Hypnosis",
				'fr-fr': "Hypnose",
				'de-de': "Hypnose"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Psychic Boom",
				'fr-fr': "Psycho-boom",
				'de-de': "Psychoknall"
			},
			effect: {
				'en-us': "Does 10 damage times the amount of Energy attached to the Defending Pokémon.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre d'Énergies attachées au Pokémon Défenseur.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte für jede Energie, die an das Verteidigende Pokémon angelegt ist, zu."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277265,
		tcgplayer: 88559
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
