import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Slugma",
		fr: "Limagma",
		de: "Schneckmag"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		218,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Combustion",
				fr: "Fournaise",
				de: "Combustion"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		en: "This Pokémon is often seen crawling around in volcanic regions.",
		fr: "On voit souvent ce Pokémon ramper dans les régions volcaniques."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274734,
				tcgplayer: 89337
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274734,
				tcgplayer: 89337
			}
		}
	]
}

export default card
