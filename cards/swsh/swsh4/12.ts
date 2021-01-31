import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh4'


const card: Card = {
	// Card Global Informations
	id: "swsh4-12",

	localId: 12,

	name: {
		en: "Shiftry",
	},

	tags: [
	],

	illustrator: "Uta",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Nuzleaf",
	},



	hp: 150,

	type: [
		Type.GRASS,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Shifty Substitution",
	},

	text: {
		en: "As long as this Pokémon is in the Active Spot, each Supporter card in your opponent’s hand has the effect \"Draw 3 cards.\" (This happens instead of the card’s usual effect.)",
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
				en: "Fan Tornado",
			},

			text: {
				en: "You may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon.",
			},

			damage: 110,

		},
	],

	weaknesses: [
		{
			type: Type.FIRE, 

			value: "×2",

		},
	],


	retreat: 3,


	// Card Trainer/Energy informations

}

export default card