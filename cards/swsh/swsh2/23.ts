import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-23",

	localId: 23,

	name: {
		en: "Appletun",
	},

	tags: [
	],

	illustrator: "Akira Komayama",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Applin",
	},





	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Delicious Aroma",
	},

	text: {
		en: "Once during your turn, you may flip a coin. If heads, switch 1 of your opponent’s Benched Basic Pokémon with their Active Pokémon.",
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
				en: "Solar Beam",
			},


			damage: 70,

		},
	],

	weaknesses: [
		{
			type: Type.FIRE, 

			value: "×2",

		},
	],


	retreat: 3,


	// Card Trainer/Energy informations

}

export default card