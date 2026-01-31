import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Rocket's Mewtwo ex",
		de: "Rockets Mewtu ex"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		150,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Darkness Switch",
				de: "Darkness Switch"
			},
			effect: {
				en: "Discard an Energy card attached to Rocket's Mewtwo ex, and then switch all damage counters on Rocket's Mewtwo ex with those on the Defending Pokémon. (If an effect of this attack is prevented, this attack does nothing.)",
				de: "Discard an Energy card attached to Rockets Mewtwo ex, and then switch all damage counters on Rocket´s Mewtwo ex with those on the Defending Pokémon. (If an effect of this attack is prevented, this attack does nothing.)"
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hypnoblast",
				de: "Hypnoblast"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Asleep."
			},
			damage: 40,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psyburn",
				de: "Psyburn"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276391,
		tcgplayer: 88778
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
