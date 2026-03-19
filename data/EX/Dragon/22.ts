import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Vibrava",
		fr: "Vibraninf",
		de: "Vibrava"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		329,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Trapinch",
		fr: "Kraknoix"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Quick Charge",
				fr: "Attaque rapide",
				de: "Quick Charge"
			},
			effect: {
				en: "Search your deck for up to 3 different types of basic Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck jusqu'à trois types de cartes Énergie de base différents, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
				de: "Search your deck for up to 3 different types of basic Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Dragon Spark",
				fr: "Étincelle de dragon",
				de: "Dragon Spark"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance to Benched Pokémon.)",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc).",
				de: "Flip a coin. If heads, this attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance to Benched Pokémon.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fire",
			value: "-30"
		},
		{
			type: "Lightning",
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		tcgplayer: 90332,
		cardmarket: 275899
	}
}

export default card
