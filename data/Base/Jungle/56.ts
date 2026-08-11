import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Meowth",
		fr: "Miaouss",
		de: "Mauzi"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		52,
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
				"Colorless",
			],
			name: {
				en: "Pay Day",
				fr: "Jackpot",
				de: "Zahltag"
			},
			effect: {
				en: "Flip a coin. If heads, draw a card.",
				fr: "Lancez une pièce. Si c'est face, piochez une carte.",
				de: "Wirf eine Münze. Bei 'Kopf' ziehe eine Karte."
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

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		en: "Adores circular objects. Wanders the streets on a nightly basis to look for dropped loose change.",
		fr: "Il adore les pièces de monnaie. Il hante les rues à la recherche de pièces oubliées par les passants."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273853,
				tcgplayer: 45159
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273853,
				tcgplayer: 45159
			}
		},
		{
			type: "normal",
			subtype: "gold-border",
		}
	],
}

export default card
