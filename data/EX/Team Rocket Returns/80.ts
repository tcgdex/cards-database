import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Voltorb",
		de: "Voltobal"
	},

	illustrator: "Sachiko Adachi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		100,
	],

	hp: 40,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Psycho Waves",
				de: "Psycho Waves"
			},
			effect: {
				en: "Discard an Energy card attached to Voltorb. The Defending Pokémon is now Confused.",
				de: "Discard an Energy card attached to Voltorb. The Defending Pokémon is now Confused."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Thunder Wave",
				de: "Thunder Wave"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276372,
		tcgplayer: 90415
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

