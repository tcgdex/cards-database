import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Blaine's Ninetales",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		38,
	],

	hp: 60,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Vulpix",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Healing Fire",
			},
			effect: {
				en: "Whenever you attach a Fire Energy card from your hand to Blaine's Ninetales, remove 1 damage counter from it, if it has any. This power stops working while Blaine's Ninetales is Asleep, Confused, or Paralyzed.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Burn Up",
			},
			effect: {
				en: "Flip a coin. If tails, discard all Energy cards attached to Blaine's Ninetales.",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274289,
		tcgplayer: 83876
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		},
	]
}

export default card
