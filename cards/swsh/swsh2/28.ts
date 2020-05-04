import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-28",

	localId: 28,

	name: {
		en: "Arcanine",
	},

	tags: [
	],

	illustrator: "Hasuno",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Growlithe",
	},





	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Warming Up",
	},

	text: {
		en: "If this Pokémon has a Burning Scarf attached, it gets +100 HP.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.FIRE,
				Type.FIRE,
				Type.COLORLESS,
			],

			name: {
				en: "Fire Mane",
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