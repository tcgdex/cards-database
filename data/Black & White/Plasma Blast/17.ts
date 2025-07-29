import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Lapras",
		fr: "Lokhlass",
		es: "Lapras",
		it: "Lapras",
		pt: "Lapras",
		de: "Lapras"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		131,
	],

	hp: 100,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Cleanse Away",
				fr: "Soin Groupé",
			},
			effect: {
				en: "Heal 30 damage from each of your Benched Pokémon.",
				fr: "Soignez 30 dégâts à chacun de vos Pokémon de Banc.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Surf",
				fr: "Surf",
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281038
	}
}

export default card
