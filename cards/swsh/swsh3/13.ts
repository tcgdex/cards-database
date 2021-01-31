import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-13",

	localId: 13,

	name: {
		en: "Decidueye",
	},


	illustrator: "Ryota Murayama",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Dartrix",
	},



	hp: 140,

	type: [
		Type.GRASS,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Deep Forest Camo",
	},

	text: {
		en: "Prevent all damage done to this Pokémon by attacks from your opponent’s Pokémon V and Pokémon-GX.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.GRASS,
				Type.COLORLESS,
			],

			name: {
				en: "Splitting Arrow",
			},

			text: {
				en: "This attack also does 20 damage to 2 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: Type.FIRE, 

			value: "×2",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card