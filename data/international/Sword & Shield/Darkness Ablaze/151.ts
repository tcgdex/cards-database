import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [661],

	name: {
		en: "Fletchling",
		fr: "Passerouge",
		es: "Fletchling",
		it: "Fletchling",
		pt: "Fletchling",
		de: "Dartiri"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Colorless",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				es: "Placaje",
				it: "Azione",
				pt: "Investida",
				de: "Tackle"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		en: "Its body is always warm. Trainers who live in cold areas apparently sleep with it in their bed."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483634,
				tcgplayer: 219364
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483634,
				tcgplayer: 219364
			}
		},
	],
}

export default card
