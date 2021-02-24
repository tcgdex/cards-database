import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Lilligant",
		fr: "Fragilady",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		549,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Petilil",
		fr: "Chlorobule",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Boo-Hoo",
				fr: "Snif",
			},
			effect: {
				en: "If your opponent attaches an Energy card from his or her hand to the Defending Pokémon during his or her next turn, that Pokémon will be Asleep.",
				fr: "Si votre adversaire attache une carte Énergie de sa main au Pokémon Défenseur pendant son prochain tour, le Pokémon ciblé sera Endormi.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Leaf Slice",
				fr: "Tranche Feuille",
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
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
