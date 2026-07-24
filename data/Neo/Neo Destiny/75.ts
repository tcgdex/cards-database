import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Mareep",
		fr: "Wattouat",
		de: "Voltilamm"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		179,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d'boule",
				de: "Headbutt"
			},

			damage: 10,

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
		en: "Its soft wool coat captures air, allowing it to remain cool during the summer and warm in the winter.",
		fr: "Sa douce laine capture l'air ambiant, ce qui lui permet de rester frais en été et chaud en hiver."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274727,
				tcgplayer: 87194
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274727,
				tcgplayer: 87194
			}
		}
	]
}

export default card
