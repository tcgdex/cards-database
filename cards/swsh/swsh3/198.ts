import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-198",

	localId: 198,

	name: {
		en: "Coalossal",
	},


	illustrator: "PLANETA Tsuji",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Carkol",
	},



	hp: 160,

	type: [
		Type.FIGHTING,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Tar Generator",
	},

	text: {
		en: "Once during your turn, you may attach a Fire Energy card, a Fighting Energy card, or 1 of each from your discard pile to your Pokémon in any way you like.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.FIGHTING,
				Type.COLORLESS,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Flaming Avalanche",
			},


			damage: 130,

		},
	],

	weaknesses: [
		{
			type: Type.GRASS, 

			value: "×2",

		},
	],


	retreat: 4,


	// Card Trainer/Energy informations

}

export default card