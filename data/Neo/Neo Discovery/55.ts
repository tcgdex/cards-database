import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Hoppip",
		fr: "Granivol",
		de: "Hoppspross"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		187,
	],

	hp: 30,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Rolling Tackle",
				fr: "Roulé-boulé",
				de: "Rolltackle"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		en: "Its body is so light, it must grip the ground firmly with its feet to keep from being blown away.",
		fr: "Son corps est si léger qu'il doit s'accrocher fermement au sol avec ses pattes pour éviter d'être emporté par le vent."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274566,
				tcgplayer: 86176
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274566,
				tcgplayer: 86176
			}
		}
	]
}

export default card

