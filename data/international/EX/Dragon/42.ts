import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Shelgon",
		'fr-fr': "Drackhaus",
		'de-de': "Draschel"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [372],

	hp: 70,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Bagon",
		'fr-fr': "Draby"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Granite Head",
				'fr-fr': "Tête de granit",
				'de-de': "Granite Head"
			},
			effect: {
				'en-us': "Damage done to Shelgon by an opponent's attack is reduced by 10 (after applying Weakness and Resistance) during your opponent's next turn.",
				'fr-fr': "Les dégâts infligés à Drackhaus par une attaque de votre adversaire sont réduits de 10 lors du prochain tour de votre adversaire (après application de la Faiblesse et de la Résistance).",
				'de-de': "Damage done to Shelgon by an opponent's attack is reduced by 10 (after applying Weakness and Resistance) during your opponent's next turn."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flare",
				'fr-fr': "Enflammer",
				'de-de': "Flare"
			},

			damage: 40,

		},
	],


	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89124,
				cardmarket: 275919
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89124,
				cardmarket: 275919
			},
		},
	],

}

export default card
