import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Quagsire",
		de: "Morlord"
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		195,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Wooper",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Saturation",
				de: "Saturation"
			},
			effect: {
				en: "When you attach a Water Energy card from your hand to Quagsire, remove all Special Conditions and 2 damage counters from Quagsire.\"",
				de: "When you attach a  Energy card from your hand to Quagsire, remove all Special Conditions and 2 damage counters from Quagsire."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Hyper Pump",
				de: "Hyper Pump"
			},
			effect: {
				en: "Does 20 damage plus 20 more damage for each basic Energy card attached to Quagsire but not used to pay for this attack's Energy cost. You can't add more than 60 damage in this way.",
				de: "Does 20 damage plus 20 more damage for each basic Energy card attached to Quagsire but not user to pay for this attack's Energy cost. You can't add more than 60 damage in this way."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276318,
		tcgplayer: 88470
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
		}
	]
}

export default card

