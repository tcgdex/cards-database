import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Weepinbell",
		fr: "Boustiflor",
	},
	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		70,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Bellsprout",
		fr: "Chétiflor",
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
			},
			effect: {
				en: "Attach up to 2 Grass Energy cards from your hand to this Pokémon.",
				fr: "Attachez jusqu’à 2 cartes Énergie Grass de votre main à ce Pokémon.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Double Razor Leaf",
				fr: "Double Tranch’Herb",
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
