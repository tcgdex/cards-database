import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Dark Steelix",
		de: "Dunkles Stahlos"
	},

	illustrator: "Kyoko Koizumi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		208,
	],

	hp: 110,

	types: [
		"Metal",
		"Darkness",
	],

	evolveFrom: {
		en: "Onix",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Energy Link",
				de: "Energy Link"
			},
			effect: {
				en: "Search your discard pile for an Energy card and attach it to Dark Steelix.",
				de: "Search your discard pile for an Energy card and attack it to Dark Steelix."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heavy Impact",
				de: "Heavy Impact"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	
	retreat: 4,

	thirdParty: {
		cardmarket: 276302,
		tcgplayer: 84658
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "holo",
		}
	]
}

export default card
