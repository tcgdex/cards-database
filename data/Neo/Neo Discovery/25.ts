import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Kabutops",
		fr: "Kabutops",
		de: "Kabutops"
	},

	illustrator: "Kimiya Masago",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		141,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Kabuto",
		fr: "Kabuto",
		de: "Kabuto"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				de: "Schlitzer"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
			],

			name: {
				en: "Hydrocutter",
				fr: "Hydro-lame",
				de: "Hydroklinge"
			},

			effect: {
				en: "Flip a number of coins equal to the number of Energy cards attached to Kabutops. This attack does 40 times the number of heads. You can't flips more than 3 coins in this way.",
				fr: "Lancez un nombre de pièces égal au nombre de cartes Énergie attachées à Kabutops. Cette attaque inflige 40 dégâts, multipliés par le nombre de faces. Vous ne pouvez pas lancer plus de 3 pièces.",
				de: "Wirf soviele Münzen, wie Energiekarten an Kabutops angelegt sind. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl „Kopf“ zu. Du kannst auf diese Weise höchstens drei Münzen werfen."
			},

			damage: "40x"
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		en: "In the water, it tucks its limbs to become more compact, then it wiggles its shell to swim fast.",
		fr: "Dans l'eau, il rentre ses pattes pour devenir plus compact, puis il agite sa carapace pour nager plus vite.",
		de: "Im Wasser klappt es seine Körperteile ein, um kompakter zu sein, und wackelt dann mit seiner Muschel, um schnell zu schwimmen."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274517,
				tcgplayer: 86394
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274517,
				tcgplayer: 86394
			}
		}
	]
}

export default card

