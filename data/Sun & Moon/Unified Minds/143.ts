import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Cottonee",
		fr: "Doudouvet",
		es: "Cottonee",
		it: "Cottonee",
		pt: "Cottonee",
		de: "Waumboll"
	},

	illustrator: "Asako Ito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		546,
	],

	hp: 60,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dust Gathering",
				fr: "Ramasse Poussière",
				es: "Concentración de Polvo",
				it: "Coglipolvere",
				pt: "Coleta de Poeira",
				de: "Staubfänger"
			},
			effect: {
				en: "Draw a card.",
				fr: "Piochez une carte.",
				es: "Roba 1 carta.",
				it: "Pesca una carta.",
				pt: "Compre 1 carta.",
				de: "Ziehe 1 Karte."
			},

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 388512
	}
}

export default card
