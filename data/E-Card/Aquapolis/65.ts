import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Weepinbell",
		fr: "Boustiflor",
		de: "Ultrigaria"
	},
	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		70,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Bellsprout",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Growth",
				fr: "Croissance",
				de: "Growth"
			},
			effect: {
				en: "Attach up to 2 Energy cards from your hand to Weepinbell.",
				fr: "Si c'est face, vous pouvez attacher jusqu'à 2 cartes Énergies  de votre main à Boustiflor.",
				de: "Attach up to 2  Energy cards from your hand to Weepinbell."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Double Razor Leaf",
				fr: "Double tranch'herb",
				de: "Double Razor Leaf"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				de: "Flip 2 coins. This attack does 30 damage times the number of heads."
			},
			damage: "30x",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
