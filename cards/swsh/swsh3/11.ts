import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-11",

	localId: 11,

	name: {
		en: "Rowlet",
	},


	illustrator: "HYOGONOSUKE",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 50,

	type: [
		Type.GRASS,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Sky Circus",
	},

	text: {
		en: "If you played Bird Keeper from your hand during this turn, ignore all Energy in this Pokémon’s attack costs.",
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
				en: "Wind Shard",
			},

			text: {
				en: "This attack does 60 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			},


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