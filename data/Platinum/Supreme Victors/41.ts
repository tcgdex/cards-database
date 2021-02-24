import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Sableye G",
		fr: "Tenefix ",
	},
	illustrator: "Yusuke Ishikawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		302,
	],
	hp: 70,
	types: [
		"Darkness",
	],

	stage: "Basic",
	suffix: "SP",

	attacks: [
		{

			name: {
				en: "Scratch",
				fr: "Griffe",
			},

			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Astonish",
				fr: "Étonnement",
			},
			effect: {
				en: "Choose 1 card from your opponent's hand without looking. Look at that card you chose, then have your opponent shuffle that card into his or her deck.",
				fr: "Choisissez sans regarder 1 carte de la main de votre adversaire. Regardez-la, puis demandez à votre adversaire de la mélanger à son deck.",
			},
			damage: 20,

		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
