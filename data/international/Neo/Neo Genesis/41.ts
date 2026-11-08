import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Miltank",
		'fr-fr': "Écrémeuh",
		'de-de': "Miltank"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		241,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Milk Drink",
				'fr-fr': "Lait A Boire",
				'de-de': "Milchgetränk"
			},
			effect: {
				'en-us': "Flip 2 coins. Remove 2 damage counters times the number of heads from Miltank. If it has fewer damage counters than that, remove all of them.",
				'fr-fr': "Lancez 2 pièces. Retirez de Écrémeuh 2 marqueurs de dégâts multipliés par le nombre de faces. S'il a moins de marqueurs de dégâts que cela, retirez-les tous.",
				'de-de': "Wirf zwei Münzen. Entferne zwei Schadensmarken mal der Anzahl 'Kopf' von Miltank. Falls es weniger Schadensmarken hat, entferne alle Schadensmarken von Miltank."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Body Slam",
				'fr-fr': "Plaquage",
				'de-de': "Bodyslam"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		'en-us': "Its milk is packed with nutrition, making it the ultimate beverage for the sick or weary.",
		'fr-fr': "Son lait très riche est le meilleur breuvage pour les malades ou les souffreteux."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274441,
				tcgplayer: 87461
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274441,
				tcgplayer: 87461
			}
		}
	]
}

export default card
