import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-75",

	localId: 75,

	name: {
		en: "Clefable",
	},

	tags: [
	],

	illustrator: "miki kudo",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Clefairy",
	},





	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Prankish",
	},

	text: {
		en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put an Energy attached to your opponent’s Active Pokémon on top of their deck.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.PSYCHIC,
				Type.COLORLESS,
			],

			name: {
				en: "Moon Kick",
			},


			damage: 60,

		},
	],

	weaknesses: [
		{
			type: Type.METAL, 

			value: "×2",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card