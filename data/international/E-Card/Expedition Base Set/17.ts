import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Magby",
		'fr-fr': "Magby",
		'de-de': "Magby"
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
				'en-us': "Fluff",
			},
			effect: {
				'en-us': "During your opponent's turn, if Jumpluff would be damaged or affected by an opponent's attack and it already has at least 1 damage counter on it, flip a coin. If heads, prevent all effects of that attack (including damage).",
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
				'en-us': "Energy Catch",
				'fr-fr': "Attrape-énergie",
				'de-de': "Energieschnapper"
			},
			effect: {
				'en-us': "Flip a coin. If heads, put a basic Energy card from your discard pile into your hand.",
				'fr-fr': "Lancez une pièce. Si c'est face, ajoutez une carte Énergie de votre pile de défausse à votre main.",
				'de-de': "Wirf eine Münze. Nimm bei 'Kopf' eine Basis-Energiekarte von deinem Ablagestapel auf deine Hand."
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
