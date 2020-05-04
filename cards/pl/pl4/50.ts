import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-50",

	localId: 50,

	name: {
		en: "Wormadam Sandy Cloak",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Atsuko Nishida",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/50/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/50/high",
			},

	},


	// Card Pokémon Informations
	evolveFrom: {
		en: "Burmy Sandy Cloak",
	},

	dexId: 413,



	type: [
		Type.FIGHTING,
	],


	attacks: [
		{
			cost: [
				Type.FIGHTING,
			],

			name: {
				en: "Hang Down",
			},


			damage: 30,

		},
		{
			cost: [
				Type.FIGHTING,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Cloak Headbutt",
			},

			text: {
				en: "If you have Wormadam Trash Cloak in play, this attack does 60 damage plus 30 more damage.",
			},

			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: Type.FIRE, 

			value: "+20",

		},
	],

	resistances: [
		{
			type: Type.LIGHTNING, 

			value: "-20",

		},
	],

	retreat: 1,


	// Card Trainer/Energy informations

}

export default card