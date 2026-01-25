import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Flareon",
		fr: "Pyroli",
		de: "Flamara"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		136,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flame Tail",
				fr: "Queue de flammes",
				de: "Flammenschweif"
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-flamme",
				de: "Flammenwurf"
			},
			effect: {
				en: "Discard an Energy attached to Flareon.",
				fr: "Défaussez une carte Énergie attachée à Pyroli.",
				de: "Lege 1 an Flamara angelegte Energie auf deinen Ablagestapel."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 279687,
		tcgplayer: 85499
	}
}

export default card
