import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-120",

	localId: 120,

	name: {
		en: "Mandibuzz",
	},

	tags: [
	],

	illustrator: "kodama",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Vullaby",
	},






	attacks: [
		{
			cost: [
				Type.DARKNESS,
			],

			name: {
				en: "Bone Rush",
			},

			text: {
				en: "Flip a coin until you get tails. This attack does 30 damage for each heads.",
			},

			damage: "30×",

		},
		{
			cost: [
				Type.DARKNESS,
				Type.DARKNESS,
			],

			name: {
				en: "Blindside",
			},

			text: {
				en: "This attack does 100 damage to 1 of your opponent’s Pokémon that has any damage counters on it. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			},


		},
	],

	weaknesses: [
		{
			type: Type.LIGHTNING, 

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