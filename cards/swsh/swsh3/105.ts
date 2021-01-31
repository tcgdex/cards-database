import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-105",

	localId: 105,

	name: {
		en: "Darkrai",
	},


	illustrator: "nagimiso",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 120,

	type: [
		Type.DARKNESS,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Darkness Guard",
	},

	text: {
		en: "If this Pokémon has any Darkness Energy attached, it takes 20 less damage from attacks (after applying Weakness and Resistance).",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Vortex of Darkness",
			},

			text: {
				en: "This attack does 20 more damage for each Darkness Energy attached to this Pokémon.",
			},

			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: Type.GRASS, 

			value: "×2",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card