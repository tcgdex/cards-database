import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Florges",
		fr: "Florges",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		671,
	],
	hp: 110,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Floette",
		fr: "Floette",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Brilliant Search",
				fr: "Recherche Brillante",
			},
			effect: {
				en: "Search your deck for up to 3 cards and put them into your hand. Shuffle your deck afterward.",
				fr: "Cherchez jusqu'à 3 cartes dans votre deck puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Petal Blizzard",
				fr: "Tempête Florale",
			},
			effect: {
				en: "This attack does 20 damage to each of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
