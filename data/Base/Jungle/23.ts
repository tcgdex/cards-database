import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Nidoqueen",
		fr: "Nidoqueen"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		31,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Nidorina",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Boyfriends",
				fr: "Fiancés"
			},
			effect: {
				en: "Does 20 damage plus 20 more damage for each Nidoking you have in play.",
				fr: "Inflige 20 dégâts plus 20 dégâts supplémentaires pour chaque Nidoking que vous avez en jeu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mega Punch",
				fr: "Ultimapoing"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Ses écailles très résistantes et son corps massif sont des armes dévastatrices."
	}
}

export default card
