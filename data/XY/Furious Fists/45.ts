import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Machoke",
		fr: "Machopeur",
		es: "Machoke",
		it: "Machoke",
		pt: "Machoke",
		de: "Maschock"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		67,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Machop",
		fr: "Machoc",
		es: "Machop",
		it: "Machop",
		pt: "Machop",
		de: "Machollo"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Beatdown",
				fr: "Dérouillée",
				es: "Derrumbar",
				it: "Batosta",
				pt: "Abater",
				de: "Niederprügler"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281709
	}
}

export default card
