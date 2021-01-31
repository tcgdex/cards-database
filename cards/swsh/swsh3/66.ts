import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-66",

	localId: 66,

	name: {
		en: "Arctozolt",
	},


	illustrator: "Hitoshi Ariga",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Rare Fossil",
	},



	hp: 130,

	type: [
		Type.LIGHTNING,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Biting Whirlpool",
	},

	text: {
		en: "Whenever your opponent attaches an Energy card from their hand to 1 of their Pokémon, put 2 damage counters on that Pokémon.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.LIGHTNING,
				Type.COLORLESS,
			],

			name: {
				en: "Electro Ball",
			},


			damage: 70,

		},
	],

	weaknesses: [
		{
			type: Type.FIGHTING, 

			value: "×2",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card