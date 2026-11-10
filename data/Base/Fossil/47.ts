import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Geodude",
		fr: "Racaillou",
		it: "Geodude",
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
				it: "Sassaiola",
				de: "Steinhagel"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 10 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à ce que ce soit pile. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				it: "Lancia una moneta finché non esce croce. Questo attacco infligge 10 danni ogni volta che esce testa.",
				de: "Wirf eine Münze, bis du „Zahl“ wirfst. Dieser Angriff fügt jedesmal, wenn die Münze „Kopf“ zeigt, 10 Schadenspunkte zu."
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
		en: "Found in fields and mountains. Mistaking them for boulders, people often step or trip on them.",
		fr: "Il vit dans les plaines et les montagnes. On le confond souvent avec un petit caillou.",
		it: "Lo si trova nei campi e in montagna. La gente spesso ci inciampa o lo calpesta, scambiandolo per un sasso.",
		de: "Auf Feldern und Bergen anzutreffen. Da sie wie Felsen aussehen, stolpern oder fallen Wanderer oft über sie."
	},


	variants: [
		{
			type: "normal",
			subtype: "1999-2000-copyright",
			thirdParty: {
				cardmarket: 273908,
				tcgplayer: 44449
			}
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273908,
				tcgplayer: 44449
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273908,
				tcgplayer: 44449
			}
		},
	],
}

export default card
