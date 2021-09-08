import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Murkrow",
		fr: "Cornebre",
	},
	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		198,
	],
	hp: 60,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Astonish",
				fr: "Étonnement",
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 card from your opponent’s hand without looking. Look at that card you chose, then have your opponent shuffle that card into his or her deck.",
				fr: "Lancez une pièce. Si c’est face, choisissez au hasard une carte dans la main de votre adversaire. Regardez la carte que vous avez choisie, puis demandez à votre adversaire de la mélanger avec son deck.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
