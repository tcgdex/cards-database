import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh35'


const card: Card = {
	// Card Global Informations
	id: "swsh35-47",

	localId: 47,

	name: {
		en: "Duraludon V",
	},

	tags: [
	],

	illustrator: "aky CG Works",

	rarity: Rarity.ULTRARARE, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/swsh/swsh35/47/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/swsh/swsh35/47/high",
			},

	},


	// Card Pokémon Informations



	hp: 220,

	type: [
		Type.METAL,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Hard Coat",
	},

	text: {
		en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
	},

}
,
	],


	weaknesses: [
		{
			type: Type.FIRE, 

			value: "×2",

		},
	],

	resistances: [
		{
			type: Type.GRASS, 

			value: "-30",

		},
	],

	retreat: 3,


	// Card Trainer/Energy informations
	effect: {
		en: "When your Pokémon V is Knocked Out, your opponent takes 2 Prize cards.",
	},

}

export default card