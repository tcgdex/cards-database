import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-83",

	localId: 83,

	name: {
		en: "Polteageist",
	},


	illustrator: "kirisAki",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Sinistea",
	},



	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Tea Break",
	},

	text: {
		en: "You must discard a Pokémon that has the Mad Party attack from your hand in order to use this Ability. Once during your turn, you may draw 2 cards.",
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
				en: "Mad Party",
			},

			text: {
				en: "This attack does 20 damage for each Pokémon in your discard pile that has the Mad Party attack.",
			},

			damage: "20×",

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

	retreat: 1,


	// Card Trainer/Energy informations

}

export default card