import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh4'


const card: Card = {
	// Card Global Informations
	id: "swsh4-21",

	localId: 21,

	name: {
		en: "Orbeetle VMAX",
	},

	tags: [
	],

	illustrator: "5ban Graphics",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Orbeetle V",
	},



	hp: 310,

	type: [
		Type.GRASS,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Eerie Beam",
	},

	text: {
		en: "Once during your turn, if this Pokémon is in the Active Spot, you may put 1 damage counter on each of your opponent’s Pokémon.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.GRASS,
				Type.COLORLESS,
			],

			name: {
				en: "G-Max Wave",
			},

			text: {
				en: "This attack does 50 more damage for each Energy attached to your opponent’s Active Pokémon.",
			},

			damage: "50+",

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