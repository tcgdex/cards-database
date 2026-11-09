import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		de: "Arktos",
		en: "Articuno",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		144,
	],

	hp: 120,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ice Beam",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},
			damage: 50,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ice Wing",
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		en: "A legendary bird Pokémon. It can create blizzards by freezing moisture in the air.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 281183,
				tcgplayer: 83653
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 281183,
				tcgplayer: 83653
			}
		},
	],
}

export default card
