import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Wailmer",
		'fr-fr': "Wailmer",
		'de-de': "Wailmer"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [320],

	hp: 80,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Hydro Pump",
				'fr-fr': "Hydrocanon",
				'de-de': "Hydropumpe"
			},
			effect: {
				'en-us': "Does 20 damage plus 10 more damage for each Water Energy attached to Wailmer but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				'fr-fr': "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie Water attachée à Wailmer qui n'a pas été utilisée pour payer le Coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
				'de-de': "Dieser Angriff fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Wailmer angelegte -Energie zu, die nicht zum Bezahlen der Energiekosten für diesen Angriff verwendet wurde. Es lassen sich so nicht mehr als 20 Schadenspunkte hinzufügen."
			},
			damage: "20+",

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Take Down",
				'fr-fr': "Bélier",
				'de-de': "Bodycheck"
			},
			effect: {
				'en-us': "Wailmer does 20 damage to itself.",
				'fr-fr': "Wailmer s'inflige 20 dégâts.",
				'de-de': "Wailmer fügt sich selbst 20 Schadenspunkte zu."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],
	retreat: 3,

	description: {
		'en-us': "On sunny days, it lands on beaches to bounce like a ball and play. It spouts water from its nose."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90454,
				cardmarket: 278778
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278778,
				tcgplayer: 90454
			}
		},
	],

}

export default card
