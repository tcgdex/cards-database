import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh4'


const card: Card = {
	// Card Global Informations
	id: "swsh4-26",

	localId: 26,

	name: {
		en: "Flareon",
	},

	tags: [
	],

	illustrator: "Eri Yamaki",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Eevee",
	},



	hp: 110,

	type: [
		Type.FIRE,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Incandescent Awakening",
	},

	text: {
		en: "If this Pokémon has a Memory Capsule attached, Grass Pokémon in play (both yours and your opponent’s) have no Abilities.",
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


			damage: 100,

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