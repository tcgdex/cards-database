import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Sewaddle",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		540,
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
				"Colorless",
			],
			name: {
				en: "Gnaw",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281160
	}
}

export default card
