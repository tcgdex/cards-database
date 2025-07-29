import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Slowpoke",
		fr: "Ramoloss",
		es: "Slowpoke",
		it: "Slowpoke",
		pt: "Slowpoke",
		de: "Flegmon"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		79,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Big Yawn",
			},
			effect: {
				en: "Both this Pokémon and the Defending Pokémon are now Asleep.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Shot in the Dark",
			},
			effect: {
				en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 280351
	}
}

export default card
