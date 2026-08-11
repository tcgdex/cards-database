import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Gabite",
		'fr-fr': "Carmache",
		'de-de': "Knarksel"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		444,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Gible",
		'fr-fr': "Griknot"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Gather Up",
				'fr-fr': "Rassemblement",
				'de-de': "Auflesen"
			},
			effect: {
				'en-us': "Search your discard pile for up to 2 Energy cards, show them to your opponent, and put them into your hand.",
				'fr-fr': "Choisissez jusqu'à 2 cartes Énergie dans votre pile de défausse, montrez-les à votre adversaire et placez-les dans votre main.",
				'de-de': "Durchsuche deinen Ablagestapel nach bis zu 2 Energiekarten, zeige sie deinem Gegner und nimm sie auf die Hand."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Marvelous Shine",
				'fr-fr': "Brillance merveilleuse",
				'de-de': "Wunderbarer Glanz"
			},
			effect: {
				'en-us': "Flip a coin. If heads, put 4 damage counters on 1 of your opponent's Pokémon. If tails, remove 4 damage counters from 1 of your Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, placez 4 marqueurs de dégât sur 1 des Pokémon de votre adversaire. Si c'est pile, retirez 4 marqueurs de dégât à 1 de vos Pokémon.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' lege 4 Schadensmarken auf 1 Pokémon deines Gegners. Bei 'Zahl' entferne 4 Schadensmarken von 1 deiner Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+20"
		},
	],
	retreat: 1,


	description: {
		'en-us': "There is a long-held belief that medicine made from its scale will heal even incurable illnesses.",
		'fr-fr': "Selon une croyance ancienne, on peut utiliser ses écailles pour guérir les maladies incurables."
	},

	thirdParty: {
		cardmarket: 277677,
		tcgplayer: 85597
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp: ["countdown-calendar"]
		},
		{
			type: "normal",
			stamp: ["pre-release"]
		},
		{
			type: "normal",
			stamp: ["pre-release","staff"]
		}
	]
}

export default card
