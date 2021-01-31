import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh35'


const card: Card = {
	// Card Global Informations
	id: "swsh35-5",

	localId: 5,

	name: {
		en: "Eldegoss V",
	},


	illustrator: "5ban Graphics",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 180,

	type: [
		Type.GRASS,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Happy Match",
	},

	text: {
		en: "When you play this Pokémon from your hand onto your Bench during your turn, you may put a Supporter card from your discard pile into your hand.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Float Up",
			},

			text: {
				en: "You may shuffle this Pokémon and all attached cards into your deck.",
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: Type.FIRE, 

			value: "×2",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card