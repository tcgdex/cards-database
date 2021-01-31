import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-132",

	localId: 132,

	name: {
		en: "Copperajah",
	},


	illustrator: "Kouki Saitou",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Cufant",
	},



	hp: 190,

	type: [
		Type.METAL,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Antibacterial Skin",
	},

	text: {
		en: "This Pokémon can’t be affected by any Special Conditions.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.METAL,
				Type.METAL,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Vengeful Stomp",
			},

			text: {
				en: "If your Benched Pokémon have any damage counters on them, this attack does 120 more damage.",
			},

			damage: "120+",

		},
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

	retreat: 4,


	// Card Trainer/Energy informations

}

export default card