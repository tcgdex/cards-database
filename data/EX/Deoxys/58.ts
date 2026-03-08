import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Duskull",
		fr: "Skelenox",
		de: "Zwirrlicht"
	},

	illustrator: "Tomoko Wakai",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		355,
	],

	hp: 40,

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
				en: "Paralyzing Gaze",
				fr: "Regard paralysant",
				de: "Paralyzed Gaze"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Will-o'-the-wisp",
				fr: "Feu follet",
				de: "Will-o'-the-wisp"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		tcgplayer: 85046,
		cardmarket: 276461
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
