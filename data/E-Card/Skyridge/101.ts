import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Snubbull",
		de: "Snubbull"
	},
	illustrator: "Hisao Nakamura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		209,
	],
	hp: 50,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scary Face",
				de: "Grimasse"
			},
			effect: {
				en: "Flip a coin. If heads, until the end of your opponent's next turn the Defending Pokémon can't Retreat.",
				de: "Wirf eine Münze. Bei 'Kopf' kann das verteidigende Pokémon bis zum Ende des nächsten gegnerischen Zugs weder angreifen noch sich zurückziehen."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite",
				de: "Biss"
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





}

export default card
