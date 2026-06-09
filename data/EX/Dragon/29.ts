import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Graveler",
		fr: "Gravalanch",
		de: "Georok"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		75,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Geodude",
		fr: "Racaillou"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Grind",
				fr: "Écrase",
				de: "Grind"
			},
			effect: {
				en: "Does 10 damage times the amount of Energy attached to Graveler.",
				fr: "Inflige 10 dégâts multipliés par le nombre d'Énergies attachées à Gravalanch.",
				de: "Does 10 damage times the amount of Energy attached to Graveler."
			},
			damage: "10x",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Big Explosion",
				fr: "Grosse explosion",
				de: "Big Explosion"
			},

			effect: {
				en: "Does 80 damage to each Active Pokémon (both yours and your opponent's).",
				fr: "Inflige 80 dégâts à chaque Pokémon Actif (les vôtres et ceux de votre adversaire).",
				de: "Does 80 damage to each Active Pokémon (both yours and your opponent's)."
			},

			damage: "10x"
		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 3,

	thirdParty: {
		tcgplayer: 85889,
		cardmarket: 275906
	}
}

export default card
