import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-91",

	localId: 91,

	name: {
		en: "Dragapult",
	},

	tags: [
	],

	illustrator: "Shin Nagasawa",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Drakloak",
	},





	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Infiltrator",
	},

	text: {
		en: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.PSYCHIC,
				Type.PSYCHIC,
			],

			name: {
				en: "Phantom Force",
			},

			text: {
				en: "Put 3 damage counters on your opponent’s Benched Pokémon in any way you like.",
			},

			damage: 120,

		},
	],

	weaknesses: [
		{
			type: Type.DARKNESS, 

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