import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Magby",
		fr: "Magby",
		de: "Magby"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		240,
	],

	hp: 30,

	types: [
		"Fire",
	],

	stage: "Basic",

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
				en: "Flip a coin. If heads, put a basic Energy cards from your discard pile into your hand.",
				fr: "Lancez une pièce. Si c'est face, ajoutez une carte Énergie de votre pile de défausse à votre main.",
				de: "Wirf eine Münze. Nimm bei 'Kopf' eine Basis-Energiekarte von deinem Ablagestapel auf deine Hand."
			},

		},
	],

	thirdParty: {
		cardmarket: 274892
	}
}

export default card
