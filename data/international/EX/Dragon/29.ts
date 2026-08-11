import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Graveler",
		'fr-fr': "Gravalanch",
		'de-de': "Georok"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [75],

	hp: 80,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Geodude",
		'fr-fr': "Racaillou"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Grind",
				'fr-fr': "Écrase",
				'de-de': "Grind"
			},
			effect: {
				'en-us': "Does 10 damage times the amount of Energy attached to Graveler.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre d'Énergies attachées à Gravalanch.",
				'de-de': "Does 10 damage times the amount of Energy attached to Graveler."
			},
			damage: "10×",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],

			name: {
				'en-us': "Big Explosion",
				'fr-fr': "Grosse explosion",
				'de-de': "Big Explosion"
			},

			effect: {
				'en-us': "Does 80 damage to each Active Pokémon (both yours and your opponent's).",
				'fr-fr': "Inflige 80 dégâts à chaque Pokémon Actif (les vôtres et ceux de votre adversaire).",
				'de-de': "Does 80 damage to each Active Pokémon (both yours and your opponent's)."
			},

			damage: "10x"
		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 3,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85889,
				cardmarket: 275906
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85889,
				cardmarket: 275906
			},
		},
	],

}

export default card
