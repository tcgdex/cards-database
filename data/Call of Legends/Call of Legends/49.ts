import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Quilava",
		fr: "Feurisson",
		de: "Igelavar"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		156,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Cyndaquil",
		fr: "Héricendre"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flare",
				fr: "Intimidation",
				de: "Flackern"
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-flamme",
				de: "Flammenwurf"
			},
			effect: {
				en: "Discard an Energy attached to Quilava.",
				fr: "Défaussez une carte Énergie attachée à Feurisson.",
				de: "Lege 1 an Igelavar angelegte Energie auf deinen Ablagestapel."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 279692,
		tcgplayer: 88487
	}
}

export default card
