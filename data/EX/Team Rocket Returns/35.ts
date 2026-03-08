import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Dark Golduck",
		de: "Dunkles Entoron"
	},

	illustrator: "Nakaoka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		55,
	],

	hp: 70,

	types: [
		"Water",
		"Darkness",
	],

	evolveFrom: {
		en: "Psyduck",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Darkness Shield",
				de: "Darkness Shield"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to each of your Active Pokémon during your opponent's next turn.",
				de: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to each of your Active Pokémon during your opponent's next turn."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cold Crush",
				de: "Cold Crush"
			},
			effect: {
				en: "You may discard an Energy card attached to Dark Golduck. If you do, discard an Energy attached to the Defending Pokémon.",
				de: "You may dicard an Energy card attached to Dark Golduck. If you do, discard an Energy attached to the Defending Pokémon."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276327,
		tcgplayer: 84605
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

