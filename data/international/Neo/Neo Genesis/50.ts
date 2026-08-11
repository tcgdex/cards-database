import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Sunflora",
		'fr-fr': "Heliatronc",
		'de-de': "Sonnflora"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		192,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Sunkern",
		'fr-fr': "Tournegrin"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Petal Dance",
				'fr-fr': "Danse-fleur",
				'de-de': "Blättertanz"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 30 damage times the number of heads. Sunflora is now Confused (after doing damage).",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces. Heliatronc est maintenant Confus (après application des dégâts).",
				'de-de': "Wirf drei Münzen. Dieser Angriff fügt 30 Schdenspunkte mal der Anzahl 'Kopf' zu. Sonnflora ist jetzt verwirrt (nach der Schadensverteilung)."
			},
			damage: "30x",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It converts sunlight into energy. In the darkness after sunset, it closes its petals and becomes still.",
		'fr-fr': "Il convertit la lumière solaire en énergie. Dans l'obscurité après le coucher du soleil, il ferme ses pétales et demeure immobile."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274450,
				tcgplayer: 89612
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274450,
				tcgplayer: 89612
			}
		}
	]
}

export default card
