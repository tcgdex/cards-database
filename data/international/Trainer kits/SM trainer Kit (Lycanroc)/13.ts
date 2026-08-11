import { Card } from 'models/database/card'
import Set from '../SM trainer Kit (Lycanroc)'

const card: Card = {
	dexId: [662],
	set: Set,

	name: {
		'en-us': "Fletchinder",
		'fr-fr': "Braisillon",
		'es-es': "Fletchinder",
		'it-it': "Fletchinder",
		'pt-br': "Fletchinder",
		'de-de': "Dartignis"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Fletchling",
		'fr-fr': "Passerouge",
		'es-es': "Fletchling",
		'it-it': "Fletchling",
		'pt-br': "Fletchling",
		'de-de': "Dartiri"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Flap"
			},
			damage: 20
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Razor Wind"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing."
			},
			damage: 40
		},
	],
	stage: "Stage1",
	retreat: 1,

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-20"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 297244,
				tcgplayer: 152833
			}
		},
	],

}

export default card