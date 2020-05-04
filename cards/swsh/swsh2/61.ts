import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-61",

	localId: 61,

	name: {
		en: "Luxio",
	},

	tags: [
	],

	illustrator: "ryoma uratsuka",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Shinx",
	},





	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Top Entry",
	},

	text: {
		en: "Once during your turn, if you drew this Pokémon from your deck at the beginning of your turn and your Bench isn't full, before you put it into your hand, you may put it onto your Bench.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.LIGHTNING,
			],

			name: {
				en: "Zap Kick",
			},


			damage: 30,

		},
	],

	weaknesses: [
		{
			type: Type.FIGHTING, 

			value: "×2",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card