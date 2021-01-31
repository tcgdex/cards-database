import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-99",

	localId: 99,

	name: {
		en: "Galarian Slowbro V",
	},


	illustrator: "5ban Graphics",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 210,

	type: [
		Type.DARKNESS,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Rapid-Fire Poison",
	},

	text: {
		en: "Once during your turn, if this Pokémon is in the Active Spot, you may make your opponent’s Active Pokémon Poisoned.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.DARKNESS,
				Type.DARKNESS,
				Type.COLORLESS,
			],

			name: {
				en: "Tripping Shot",
			},

			text: {
				en: "During your opponent’s next turn, the Defending Pokémon can’t retreat.",
			},

			damage: 130,

		},
	],

	weaknesses: [
		{
			type: Type.FIGHTING, 

			value: "×2",

		},
	],


	retreat: 3,


	// Card Trainer/Energy informations

}

export default card