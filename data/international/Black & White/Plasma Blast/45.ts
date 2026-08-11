import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Golett",
		fr: "Gringolem",
		es: "Golett",
		it: "Golett",
		pt: "Golett",
		de: "Golbit"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		622,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Beat",
				fr: "Bataille",
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Mega Punch",
				fr: "Ultimapoing",
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "Ancient science fashioned this Pokémon from clay. It's been active for thousands of years.",
	},

	thirdParty: {
		cardmarket: 281066,
		tcgplayer: 85834
	}
}

export default card
