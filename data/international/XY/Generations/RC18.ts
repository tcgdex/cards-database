import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Floette",
		'fr-fr': "Floette",
	},

	illustrator: "Eske Yoshinob",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		670,
	],

	hp: 70,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Flabébé",
		'fr-fr': "Flabébé",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Petal Blizzard",
				'fr-fr': "Tempête Florale",
			},
			effect: {
				'en-us': "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Razor Leaf",
				'fr-fr': "Tranch'Herbe",
			},

			damage: 30,

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

	description: {
		'en-us': "The five of us team up to be the Pretty Young Girl Force! We'll show you some beautiful moves!",
	},

	thirdParty: {
		cardmarket: 288527
	}
}

export default card
