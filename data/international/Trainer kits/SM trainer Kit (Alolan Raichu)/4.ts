import { Card } from 'models/database/card'
import Set from '../SM trainer Kit (Alolan Raichu)'

const card: Card = {
	dexId: [759],
	set: Set,

	name: {
		'en-us': "Stufful",
		'fr-fr': "Nounourson",
		'es-es': "Stufful",
		'it-it': "Stufful",
		'pt-br': "Stufful",
		'de-de': "Velursi"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: [
		"Colorless"
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle"
			},
			damage: 30
		},
	],
	stage: "Basic",
	retreat: 2,

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 297241,
				tcgplayer: 152862
			}
		},
	],

}

export default card