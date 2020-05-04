import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-21",

	localId: 21,

	name: {
		en: "Lopunny",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kyoko Umemoto",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/21/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/21/high",
			},

	},


	// Card Pokémon Informations
	evolveFrom: {
		en: "Buneary",
	},

	dexId: 428,



	type: [
		Type.COLORLESS,
	],

	abilities: [
		{
	type: AbilityType.POKEPOWER, 

	name: {
		en: "Relaxing Shower",
	},

	text: {
		en: "Once during your turn (before your attack), you may discard an Energy card from your hand. If you do, remove 1 damage counter from each of your Pokémon. This power can't be used if Lopunny is affected by a Special Condition.",
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
				en: "Hover Heal",
			},

			text: {
				en: "Remove all Special Conditions from Lopunny.",
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: Type.FIGHTING, 

			value: "+20",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card