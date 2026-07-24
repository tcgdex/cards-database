import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Quilava",
		fr: "Feurisson",
		de: "Igelavar"
	},

	illustrator: "Asuka Iwashita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [156],

	hp: 70,

	types: [
		"Fire"
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
	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Super Singe",
				fr: "Ça sent le roussi !",
				de: "Super-Versengung"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Burned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Brûlé.",
				de: "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verbrannt."
			},
			damage: 20,

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
			type: "Water",
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
			thirdParty: {
				tcgplayer: 88483,
				cardmarket: 274966
			},
		},
	],
}

export default card
