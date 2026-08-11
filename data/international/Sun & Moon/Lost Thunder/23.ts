import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Wurmple",
		fr: "Chenipotte",
		es: "Wurmple",
		it: "Wurmple",
		pt: "Wurmple",
		de: "Waumpel"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		265,
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
			],
			name: {
				en: "Ram",
				fr: "Collision",
				es: "Apisonar",
				it: "Carica",
				pt: "Aríete",
				de: "Ramme"
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
		en: "It lives among the tall grass and in forests. It repels attacks by raising up the spikes on its rear.",
	},

	thirdParty: {
		cardmarket: 365616,
		tcgplayer: 178824
	}
}

export default card
