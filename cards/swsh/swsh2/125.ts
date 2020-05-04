import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-125",

	localId: 125,

	name: {
		en: "Grimmsnarl",
	},

	tags: [
	],

	illustrator: "nagimiso",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Morgrem",
	},





	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Dark Oath",
	},

	text: {
		en: "As long as this Pokémon is in the Active Spot, your opponent’s Active Pokémon’s attacks cost Colorless more.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.DARKNESS,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Energy Press",
			},

			text: {
				en: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
			},

			damage: "100+",

		},
	],

	weaknesses: [
		{
			type: Type.GRASS, 

			value: "×2",

		},
	],


	retreat: 3,


	// Card Trainer/Energy informations

}

export default card