import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-91",

	localId: 91,

	name: {
		en: "Flygon",
	},


	illustrator: "hatachu",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Vibrava",
	},



	hp: 150,

	type: [
		Type.FIGHTING,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Labyrinth of Sand",
	},

	text: {
		en: "As long as this Pokémon is in the Active Spot, your opponent’s Active Pokémon can’t retreat.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.FIGHTING,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Desert Geyser",
			},

			text: {
				en: "If your opponent has a Stadium in play, discard it. If you discarded a Stadium in this way, during your opponent’s next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			},

			damage: 130,

		},
	],

	weaknesses: [
		{
			type: Type.GRASS, 

			value: "×2",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card