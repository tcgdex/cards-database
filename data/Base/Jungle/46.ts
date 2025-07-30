import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Seaking",
		fr: "Poissoroy",
		de: "Golking"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		119,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Goldeen",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Horn Attack",
				fr: "Koud'korne",
				de: "Kopfnuss"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Waterfall",
				fr: "Cascade",
				de: "Kaskade"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Pendant la saison des amours, on peut le voir nager dans les rivières et les lacs."
	},

	thirdParty: {
		cardmarket: 273843,
		tcgplayer: 45149
	}
}

export default card
