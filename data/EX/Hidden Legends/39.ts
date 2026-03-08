import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Loudred",
		fr: "Ramboum",
		de: "Krakeelo"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		294,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Whismur",
		fr: "Chuchmur"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cracking Punch",
				fr: "Super voix",
				de: "Cracking Voice"
			},
			effect: {
				en: "Flip a coin. If heads, each Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, chaque Pokémon Défenseur est maintenant Confus.",
				de: "Flip a coin. If heads, each Defending Pokémon is now Confused."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Light Punch",
				fr: "Poing léger",
				de: "Light Punch"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276113,
		tcgplayer: 86840
	},

	variants: [
		{
			type: "normal",
		}, {
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
