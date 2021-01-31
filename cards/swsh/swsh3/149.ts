import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-149",

	localId: 149,

	name: {
		en: "Swanna",
	},


	illustrator: "Taira Akitsu",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Ducklett",
	},



	hp: 110,

	type: [
		Type.COLORLESS,
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
				en: "Feather Slice",
			},

			text: {
				en: "You may discard a card from your hand. If you do, this attack does 70 more damage.",
			},

			damage: "70+",

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



	// Card Trainer/Energy informations

}

export default card