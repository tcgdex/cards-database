import { Card } from 'models/database/card'
import Set from '../Fossil'

const card: Card = {
	name: {
		'en-us': "Geodude",
		'fr-fr': "Racaillou",
		'de-de': "Kleinstein"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		74,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Stone Barrage",
				'fr-fr': "Barrage de pierre",
				'de-de': "Steinhagel"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez une pièce jusqu'à ce que ce soit pile. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf eine Münze, bis du 'Zahl' wirfst. Dieser Angriff fügt jedesmal, wenn die Münze 'Kopf' zeigt, 10 Schadenspunkte zu."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Found in fields and mountains. Mistaking them for boulders, people often step or trip on them.",
		'fr-fr': "Il vit dans les plaines et les montagnes. On le confond souvent avec un petit caillou."
	},


	variants: [
		{
			type: "normal",
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273908,
				tcgplayer: 44449
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273908,
				tcgplayer: 44449
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
