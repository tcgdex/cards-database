import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Magnemite",
		fr: "Feurisson",
		de: "Igelavar"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [81],

	hp: 50,

	types: [
		"Lightning"
	],

	evolveFrom: {
		en: "Cyndaquil",
		fr: "Héricendre"
	},

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Conductive Body",
			},
			effect: {
				en: "You pay Colorless less to retreat Magnemite for each Magnemite on your Bench.",
			},
		},
	],,
	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Magnetic Bomb",
				fr: "Ça sent le roussi !",
				de: "Super-Versengung"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage. If tails, Magnemite does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Brûlé.",
				de: "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verbrannt."
			},
			damage: "20+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				de: "Tackle"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88483,
				cardmarket: 274966
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
