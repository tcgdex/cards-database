import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh4'


const card: Card = {
	// Card Global Informations
	id: "swsh4-47",

	localId: 47,

	name: {
		en: "Jolteon",
	},

	tags: [
	],

	illustrator: "Mizue",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Eevee",
	},



	hp: 100,

	type: [
		Type.LIGHTNING,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Thunderous Awakening",
	},

	text: {
		en: "If this Pokémon has a Memory Capsule attached, Water Pokémon in play (both yours and your opponent’s) have no Abilities.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.LIGHTNING,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Electric Ball",
			},


			damage: 90,

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