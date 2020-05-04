import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-38",

	localId: 38,

	name: {
		en: "Galarian Mr. Rime",
	},

	tags: [
	],

	illustrator: "Mitsuhiro Arita",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Galarian Mr. Mime",
	},





	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Screen Cleaner",
	},

	text: {
		en: "Prevent all effects of your opponent's attacks, except damage, done to all of your Pokémon that have Energy attached. (Existing effects are not removed.)",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.WATER,
				Type.COLORLESS,
			],

			name: {
				en: "Triple Spin",
			},

			text: {
				en: "Flip 3 coins. This attack does 50 damage for each heads.",
			},

			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: Type.METAL, 

			value: "×2",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card