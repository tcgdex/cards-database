import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Magby",
		fr: "Magby",
		de: "Magby"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [240],

	hp: 30,

	types: [
		"Fire"
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
	],
	stage: "Baby",

	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Energy Catch",
				fr: "Attrape-énergie",
				de: "Energieschnapper"
			},
			effect: {
				en: "Flip a coin. If heads, put a basic Energy card from your discard pile into your hand.",
				fr: "Lancez une pièce. Si c'est face, ajoutez une carte Énergie de votre pile de défausse à votre main.",
				de: "Wirf eine Münze. Nimm bei 'Kopf' eine Basis-Energiekarte von deinem Ablagestapel auf deine Hand."
			},

		},
	],

	retreat: 1,

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
			thirdParty: {
				tcgplayer: 87000,
				cardmarket: 274892
			},
		},
	],
}

export default card
