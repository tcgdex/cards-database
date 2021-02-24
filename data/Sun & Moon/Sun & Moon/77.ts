import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Alolan Raticate",
		fr: "Rattatac d’Alola",
	},
	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		20,
	],
	hp: 120,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Alolan Rattata",
		fr: "Rattata d’Alola",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Evil Orders",
				fr: "Consignes Maléfiques",
			},
			effect: {
				en: "Search your deck for a number of cards up to the number of your Benched Pokémon and put them into your hand. Then, shuffle your deck.",
				fr: "Cherchez autant de cartes dans votre deck que le nombre de Pokémon sur votre Banc, puis placez-les dans votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Endeavor",
				fr: "Effort",
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
