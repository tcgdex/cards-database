import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Geodude",
		fr: "Racaillou",
		de: "Kleinstein"
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
				en: "Stone Barrage",
				fr: "Barrage de pierre",
				de: "Steinhagel"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 10 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à ce que ce soit pile. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Wirf eine Münze, bis du 'Zahl' wirfst. Dieser Angriff fügt jedesmal, wenn die Münze 'Kopf' zeigt, 10 Schadenspunkte zu."
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

	description: {
		fr: "Il vit dans les plaines et les montagnes. On le confond souvent avec un petit caillou."
	},

	thirdParty: {
		cardmarket: 273908,
		tcgplayer: 44449
	},

	variants: [
		{
			type: "normal",
			foil: "galaxy"
		},
		{
			type: "normal",
			stamp: ["1st edition"],
			foil: "galaxy"
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
