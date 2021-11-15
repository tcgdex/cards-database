import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Graveler",
		fr: "Gravalanch"
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
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Grind",
				fr: "Écrase"
			},
			effect: {
				en: "Does 10 damage times the amount of Energy attached to Graveler.",
				fr: "Inflige 10 dégâts multipliés par le nombre d'Énergies attachées à Gravalanch."
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
				en: "Big Explosion",
				fr: "Grosse explosion"
			},
			effect: {
				en: "Does 80 damage to each Active Pokémon (both yours and your opponent's).",
				fr: "Inflige 80 dégâts à chaque Pokémon Actif (les vôtres et ceux de votre adversaire)."
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
