import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-135",

	localId: 135,

	name: {
		en: "Aegislash",
	},

	tags: [
	],

	illustrator: "Ryuta Fuse",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Doublade",
	},





	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Big Shield",
	},

	text: {
		en: "All of your Pokémon take 30 less damage from your opponent’s attacks (after applying Weakness and Resistance). You can’t apply more than 1 Big Shield Ability at a time.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.METAL,
				Type.METAL,
				Type.COLORLESS,
			],

			name: {
				en: "Power Edge",
			},


			damage: 130,

		},
	],

	weaknesses: [
		{
			type: Type.FIRE, 

			value: "×2",

		},
	],

	resistances: [
		{
			type: Type.GRASS, 

			value: "-30",

		},
	],

	retreat: 3,


	// Card Trainer/Energy informations

}

export default card