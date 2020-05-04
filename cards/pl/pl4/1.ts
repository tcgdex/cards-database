import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-1",

	localId: 1,

	name: {
		en: "Charizard",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kagemaru Himeno",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/1/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/1/high",
			},

	},


	// Card Pokémon Informations
	evolveFrom: {
		en: "Charmeleon",
	},

	dexId: 6,



	type: [
		Type.FIRE,
	],

	abilities: [
		{
	type: AbilityType.POKEBODY, 

	name: {
		en: "Fire Formation",
	},

	text: {
		en: "Each of Charizard's attacks does 10 more damage for each Fire Pokémon on your Bench to your opponent's Active Pokémon (before applying Weakness and Resistance).",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.FIRE,
			],

			name: {
				en: "Fire Wing",
			},


			damage: 30,

		},
		{
			cost: [
				Type.FIRE,
				Type.FIRE,
				Type.COLORLESS,
			],

			name: {
				en: "Burning Tail",
			},

			text: {
				en: "Discard a Fire Energy attached to Charizard.",
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: Type.WATER, 

			value: "+30",

		},
	],

	resistances: [
		{
			type: Type.FIGHTING, 

			value: "-20",

		},
	],

	retreat: 3,


	// Card Trainer/Energy informations

}

export default card