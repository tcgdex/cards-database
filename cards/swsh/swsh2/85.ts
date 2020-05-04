import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-85",

	localId: 85,

	name: {
		en: "Hatterene",
	},

	tags: [
	],

	illustrator: "Kagemaru Himeno",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Hattrem",
	},





	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Mind Hat",
	},

	text: {
		en: "Once during your turn, you may use this Ability. Each player discards a card from their hand. (Your opponent discards first.)",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.PSYCHIC,
			],

			name: {
				en: "Dripping Grudge",
			},

			text: {
				en: "Put 1 damage counter on your opponent's Active Pokémon for each Pokémon in your discard pile.",
			},


		},
	],

	weaknesses: [
		{
			type: Type.DARKNESS, 

			value: "×2",

		},
	],

	resistances: [
		{
			type: Type.FIGHTING, 

			value: "-30",

		},
	],

	retreat: 2,


	// Card Trainer/Energy informations

}

export default card