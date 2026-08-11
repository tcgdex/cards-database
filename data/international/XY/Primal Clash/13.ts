import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Surskit",
		fr: "Arakdo",
		es: "Surskit",
		it: "Surskit",
		pt: "Surskit",
		de: "Gehweiher"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		283,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
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

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It appears as if it is skating on water. It draws prey with a sweet scent from the tip of its head.",
	},

	thirdParty: {
		cardmarket: 273544,
		tcgplayer: 95897
	}
}

export default card
