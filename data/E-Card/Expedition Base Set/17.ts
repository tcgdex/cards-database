import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Jumpluff",
		fr: "Magby",
		de: "Magby"
	},

	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [189],

	hp: 70,

	types: [
		"Grass"
	],

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Fluff",
			},
			effect: {
				en: "During your opponent's turn, if Jumpluff would be damaged or affected by an opponent's attack and it already has at least 1 damage counter on it, flip a coin. If heads, prevent all effects of that attack (including damage).",
			},
		},
	],,
	stage: "Stage2",

	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],,
	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],,
	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Cotton Punch",
				fr: "Attrape-énergie",
				de: "Energieschnapper"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 times the number of heads.",
				fr: "Lancez une pièce. Si c'est face, ajoutez une carte Énergie de votre pile de défausse à votre main.",
				de: "Wirf eine Münze. Nimm bei 'Kopf' eine Basis-Energiekarte von deinem Ablagestapel auf deine Hand."
			},

		},
	],

	retreat: 0,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87000,
				cardmarket: 274892
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
