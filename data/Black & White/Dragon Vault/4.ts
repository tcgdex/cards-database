import { Card } from '../../../interfaces'
import Set from '../Dragon Vault'

const card: Card = {
	name: {
		en: "Dragonair",
		fr: "Draco",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		148,
	],

	hp: 70,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Dratini",
		fr: "Minidraco",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Healing Melody",
				fr: "Mélodie Apaisante",
			},
			effect: {
				en: "Heal 10 damage from each of your Pokémon.",
				fr: "Soignez 10 dégâts à chacun de vos Pokémon.",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Slam",
				fr: "Souplesse",
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
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281003
	}
}

export default card
