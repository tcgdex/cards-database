import { Card } from '../../../interfaces'
import Set from '../POP Series 6'

const card: Card = {
	name: {
		en: "Riolu",
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		447,
	],

	hp: 60,

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
				en: "Wild Kick",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	description: {
		en: "The aura that emanates from its body intensifies to alert others if it is afraid or sad."
	},

	retreat: 1,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 277893,
		tcgplayer: 88752
	}
}

export default card
