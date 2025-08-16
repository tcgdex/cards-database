import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Hitmonlee",
		fr: "Kicklee",
		de: "Kicklee"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		106,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Kick",
				fr: "Koud’pied",
				de: "Tritt"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "High Jump Kick",
				fr: "Pied voltige",
				de: "Turmkick"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "If it starts kicking repeatedly, both legs will stretch even longer to strike a fleeing foe."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279305,
		tcgplayer: 86107
	}
}

export default card
