import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-185",

	localId: 185,

	name: {
		en: "Salamence V",
	},


	illustrator: "Saki Hayashiro",

	rarity: Rarity.ULTRARARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 220,

	type: [
		Type.COLORLESS,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Swoop Across",
			},

			text: {
				en: "This attack does 30 damage to each of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			},


		},
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Heavy Storm",
			},


			damage: 160,

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