import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Cherubi",
		'fr-fr': "Ceribou",
		'de-de': "Kikugi"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		420,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Sleep Powder",
				'fr-fr': "Poudre dodo",
				'de-de': "Schlafpuder"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Leech Seed",
				'fr-fr': "Vampigraine",
				'de-de': "Egelsamen"
			},
			effect: {
				'en-us': "If this attack does any damage to the Defending Pokémon (after applying Weakness and Resistance), remove 1 damage counter from Cherubi.",
				'fr-fr': "Si cette attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), retirez à Ceribou un marqueur de dégât.",
				'de-de': "Falls dieser Angriff dem Verteidigenden Pokémon Schaden zufügt (nachdem Schwäche und Resistenz verrechnet wurden), entferne 1 Schadensmarke von Kikugi."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The small ball holds the nutrients needed for evolution. Apparently, it is very sweet and tasty.",
		'fr-fr': "La petite boule renferme les délicieux nutriments sucrés dont il a besoin pour évoluer."
	},

	thirdParty: {
		cardmarket: 277574,
		tcgplayer: 84259
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
