import { Card } from '../../../interfaces'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		en: "Goldeen",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		118,
	],

	hp: 40,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Horn Attack",
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

	description: {
		en: "Its tail fin billows like an elegant ballroom dress, giving it the nickname \"Water Queen.\"",
	},

	thirdParty: {
		cardmarket: 273999,
		tcgplayer: 42528
	},

	variants: [
		{
			type: "normal",
		}
	]
}

export default card
