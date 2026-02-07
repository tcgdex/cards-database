import { Card } from '../../../interfaces'
import Set from '../POP Series 8'

const card: Card = {
	name: {
		en: "Yanmega",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		469,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Yanma",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Supersonic",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Air Slash",
			},
			effect: {
				en: "Flip a coin. If tails, discard an Energy attached to Yanmega.",
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	description: {
		en: "By churning its wings, it creates shock waves that inflict critical internal injuries to foes."
	},

	retreat: 0,

	variants: [
		{ type: 'holo', size: 'standard' }
	],

	thirdParty: {
		cardmarket: 278406,
		tcgplayer: 90691
	}
}

export default card
