import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Carracosta",
		fr: "Mégapagos",
		es: "Carracosta",
		it: "Carracosta",
		pt: "Carracosta",
		de: "Karippas"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		565,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Tirtouga",
		fr: "Carapagos",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fossil Clutch",
				fr: "Munition Fossile",
			},
			effect: {
				en: "You may discard an Item card that has Fossil in its name from your hand. If you do, this attack does 50 more damage.",
				fr: "Vous pouvez défausser une carte Objet qui a Fossile dans son nom de votre main. Dans ce cas, cette attaque inflige 50 dégâts supplémentaires.",
			},
			damage: 50,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Waterfall",
				fr: "Cascade",
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 281049,
		tcgplayer: 84110
	}
}

export default card
