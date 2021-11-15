import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Delcatty",
		fr: "Delcatty"
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		301,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Skitty",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ultra Energy Source",
				fr: "Source d'énergie ultra"
			},
			effect: {
				en: "Does 10 damage times the amount of basic Energy attached to all of the Active Pokémon (both yours and your opponent's).",
				fr: "Inflige 10 dégâts multipliés par le nombre de cartes Énergie attachées aux Pokémon Actifs (les vôtres et ceux de votre adversaire)."
			},
			damage: "10×",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
