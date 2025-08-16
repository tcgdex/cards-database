import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Gabite",
		fr: "Carmache",
		de: "Knarksel"
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
		en: "Gible",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gather Up",
				fr: "Rassemblement",
				de: "Auflesen"
			},
			effect: {
				en: "Search your discard pile for up to 2 Energy cards, show them to your opponent, and put them into your hand.",
				fr: "Choisissez jusqu'à 2 cartes Énergie dans votre pile de défausse, montrez-les à votre adversaire et placez-les dans votre main.",
				de: "Durchsuche deinen Ablagestapel nach bis zu 2 Energiekarten, zeige sie deinem Gegner und nimm sie auf die Hand."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Marvelous Shine",
				fr: "Brillance merveilleuse",
				de: "Wunderbarer Glanz"
			},
			effect: {
				en: "Flip a coin. If heads, put 4 damage counters on 1 of your opponent's Pokémon. If tails, remove 4 damage counters from 1 of your Pokémon.",
				fr: "Lancez une pièce. Si c'est face, placez 4 marqueurs de dégât sur 1 des Pokémon de votre adversaire. Si c'est pile, retirez 4 marqueurs de dégât à 1 de vos Pokémon.",
				de: "Wirf 1 Münze. Bei 'Kopf' lege 4 Schadensmarken auf 1 Pokémon deines Gegners. Bei 'Zahl' entferne 4 Schadensmarken von 1 deiner Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+20"
		},
	],

	description: {
		fr: "Selon une croyance ancienne, on peut utiliser ses écailles pour guérir les maladies incurables."
	},

	thirdParty: {
		cardmarket: 277677,
		tcgplayer: 85597
	}
}

export default card
