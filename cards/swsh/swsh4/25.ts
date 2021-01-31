import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh4'


const card: Card = {
	// Card Global Informations
	id: "swsh4-25",

	localId: 25,

	name: {
		en: "Charizard",
	},

	tags: [
	],

	illustrator: "Ryuta Fuse",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Charmeleon",
	},



	hp: 170,

	type: [
		Type.FIRE,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Battle Sense",
	},

	text: {
		en: "Once during your turn, you may look at the top 3 cards of your deck and put 1 of them into your hand. Discard the other cards.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.FIRE,
				Type.FIRE,
			],

			name: {
				en: "Royal Blaze",
			},

			text: {
				en: "This attack does 50 more damage for each Leon card in your discard pile.",
			},

			damage: "100+",

		},
	],

	weaknesses: [
		{
			type: Type.WATER, 

			value: "×2",

		},
	],


	retreat: 3,


	// Card Trainer/Energy informations

}

export default card