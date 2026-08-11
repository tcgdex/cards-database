import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Voltorb",
		fr: "Voltorbe",
		de: "Voltobal"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		100,
	],

	hp: 40,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Speed Ball",
				fr: "Balle rapide",
				de: "Geschwindigkeitsball"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "Usually seen only in power plants, it is sometimes seen in towns, apparently using the power lines to travel.",
		fr: "Bien qu'on en trouve normalement que dans les centrales, on en aperçoit parfois en ville, utilisant apparemment les lignes électriques pour voyager."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274122,
				tcgplayer: 90409
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274122,
				tcgplayer: 90409
			}
		}
	]
}

export default card
