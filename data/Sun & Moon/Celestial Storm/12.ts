import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Seedot",
		fr: "Grainipiot",
		es: "Seedot",
		it: "Seedot",
		pt: "Seedot",
		de: "Samurzel"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		273,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stampede",
				fr: "Ruée",
				es: "Estampida",
				it: "Fuggi Fuggi",
				pt: "Estouro",
				de: "Zertrampeln"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 361258
	}
}

export default card
