import { Card } from 'models/database/card'
import Set from '../Fossil'

const card: Card = {
	name: {
		'en-us': "Gastly",
		'fr-fr': "Fantominus",
		'de-de': "Nebulak"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		92,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Lick",
				'fr-fr': "Léchouille",
				'de-de': "Schlecker"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Energy Conversion",
				'fr-fr': "Conversion d'Énergie",
				'de-de': "Energieverwandlung"
			},
			effect: {
				'en-us': "Put up to 2 Energy cards from your discard pile into your hand. Gastly does 10 damage to itself.",
				'fr-fr': "Placez jusqu'à 2 cartes Énergie de votre pile de défausse dans votre main. Fantominus s'inflige 10 dégâts.",
				'de-de': "Nimm bis zu zwei Energiekarten von deinem Ablagestapel auf deine hand. nebulak fügt sich selbst 10 schadenspunkte zu."
			},

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		'en-us': "A mysterious Pokémon. Some say it is a lifeform from another dimension, while other believe it is formed from smog.",
		'fr-fr': "Un Pokémon mystérieux. Certains pensent qu'il vient d'une autre dimension, d'autres croient qu'il est formé de brouillard."
	},


	variants: [
		{
			type: "normal",
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273894,
				tcgplayer: 44435
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273894,
				tcgplayer: 44435
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
