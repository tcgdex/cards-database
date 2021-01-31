import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh35'


const card: Card = {
	// Card Global Informations
	id: "swsh35-49",

	localId: 49,

	name: {
		en: "Altaria",
	},

	tags: [
	],

	illustrator: "Taira Akitsu",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/swsh/swsh35/49/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/swsh/swsh35/49/high",
			},

	},


	// Card Pokémon Informations
	evolveFrom: {
		en: "Swablu",
	},



	hp: 110,

	type: [
		Type.COLORLESS,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Miraculous Charm",
	},

	text: {
		en: "Prevent all damage done to this Pokémon by attacks from your opponent’s Pokémon V and Pokémon-GX.",
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
				en: "Speed Dive",
			},


			damage: 60,

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

	retreat: 1,


	// Card Trainer/Energy informations

}

export default card