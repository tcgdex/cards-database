import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh4'


const card: Card = {
	// Card Global Informations
	id: "swsh4-46",

	localId: 46,

	name: {
		en: "Electrode",
	},

	tags: [
	],

	illustrator: "sui",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Voltorb",
	},



	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Buzzap Generator",
	},

	text: {
		en: "Once during your turn, if this Pokémon is on your Bench, you may search your deck for up to 2 Lightning Energy cards and attach them to your Lightning Pokémon in any way you like. Then, shuffle your deck. If you searched your deck in this way, this Pokémon is Knocked Out.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.LIGHTNING,
				Type.LIGHTNING,
				Type.COLORLESS,
			],

			name: {
				en: "Electric Ball",
			},


			damage: 100,

		},
	],

	weaknesses: [
		{
			type: Type.FIGHTING, 

			value: "×2",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card