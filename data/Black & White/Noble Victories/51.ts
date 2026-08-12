import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Duosion",
		fr: "Méios",
		es: "Duosion",
		it: "Duosion",
		pt: "Duosion",
		de: "Mitodos"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		578,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Solosis",
		fr: "Nucléos",
		de: "Monozyto"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
				de: "Walzer"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Since they have two divided brains, at times they suddenly try to take two different actions at once.",
		de: "Wegen seines gespaltenen Denkapparates kann es vorkommen, dass es sich abrupt einer anderen Tätigkeit zuwendet."
	},

	thirdParty: {
		cardmarket: 280174,
		tcgplayer: 85017
	}
}

export default card
