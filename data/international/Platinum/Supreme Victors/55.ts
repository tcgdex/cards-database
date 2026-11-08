import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Cherrim",
		'fr-fr': "Ceriflor",
		'de-de': "Kinoso"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [421],

	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Cherubi",
		'fr-fr': "Ceribou"
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'de-de': "Ramme"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Petal Dance",
				'fr-fr': "Danse-fleur",
				'de-de': "Blättertanz"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 30 damage times the number of heads. Cherrim is now Confused.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces. Ceriflor est maintenant Confus.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu. Kinoso ist jetzt verwirrt."
			},
			damage: "30x",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
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
		'en-us': "If it senses strong sunlight, it opens its folded petals to absorb the sun's rays with its whole body."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84254,
				cardmarket: 278746
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278746,
				tcgplayer: 84254
			}
		},
	],

}

export default card
