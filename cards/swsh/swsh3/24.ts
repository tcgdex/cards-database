import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-24",

	localId: 24,

	name: {
		en: "Blaziken",
	},


	illustrator: "Ryuta Fuse",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Combusken",
	},



	hp: 170,

	type: [
		Type.FIRE,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Double Type",
	},

	text: {
		en: "As long as this Pokémon is in play, it is Fire and Fighting type.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.FIRE,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Turbo Drive",
			},

			text: {
				en: "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
			},

			damage: 130,

		},
	],

	weaknesses: [
		{
			type: Type.WATER, 

			value: "×2",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card