import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-82",

	localId: 82,

	name: {
		en: "Palossand",
	},

	tags: [
	],

	illustrator: "Hasuno",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Sandygast",
	},






	attacks: [
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Sand Sink",
			},

			text: {
				en: "Discard the top card of your opponent’s deck. If this Pokémon has a Cursed Shovel attached, discard 2 more cards from the top of your opponent's deck.",
			},


		},
		{
			cost: [
				Type.PSYCHIC,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Super Absorption",
			},

			text: {
				en: "Heal 30 damage from this Pokémon.",
			},

			damage: 90,

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

	retreat: 4,


	// Card Trainer/Energy informations

}

export default card