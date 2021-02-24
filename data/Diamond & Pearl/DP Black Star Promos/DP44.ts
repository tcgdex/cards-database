import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Magnezone",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		462,
	],
	hp: 130,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Magneton",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Charge Beam",
			},
			effect: {
				en: "Search your discard pile for an Energy card and attach it to Magnezone.",
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Metallic Bolt",
			},
			effect: {
				en: "You may discard a Lightning Energy and a Metal Energy attached to Magnezone. If you do, this attack's base damage is 120 instead of 60.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],




}

export default card
