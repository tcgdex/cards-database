import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Squirtle",
		fr: "Carapuce",
		de: "Schiggy"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		7,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shell Attack",
				fr: "Carap'attaque",
				de: "Panzerangriff"
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
	retreat: 1,


	description: {
		en: "Cute Pokémon that charms people with its innocent eyes. Loves swimming all day long.",
		fr: "Ce mignon Pokémon charme les gens avec ses yeux innocents. Il passe ses journées à nager"
	},

	thirdParty: {
		cardmarket: 274121,
		tcgplayer: 89484
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
