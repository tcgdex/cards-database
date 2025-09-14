import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Gastly",
		fr: "Fantominus",
		de: "Nebulak"
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
				en: "Lick",
				fr: "Léchouille",
				de: "Schlecker"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Energy Conversion",
				fr: "Conversion d'Énergie",
				de: "Energieverwandlung"
			},
			effect: {
				en: "Put up to 2 Energy cards from your discard pile into your hand. Gastly does 10 damage to itself.",
				fr: "Placez jusqu'à 2 cartes Énergie de votre pile de défausse dans votre main. Fantominus s'inflige 10 dégâts.",
				de: "Nimm bis zu zwei Energiekarten von deinem Ablagestapel auf deine hand. nebulak fügt sich selbst 10 schadenspunkte zu."
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
		fr: "Un Pokémon mystérieux. Certains pensent qu'il vient d'une autre dimension, d'autres croient qu'il est formé de brouillard."
	},

	thirdParty: {
		cardmarket: 273894,
		tcgplayer: 44435
	},

	variants: [
		{
			type: "normal",
			foil: "galaxy"
		},
		{
			type: "normal",
			stamp: ["1st edition"],
			foil: "galaxy"
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
