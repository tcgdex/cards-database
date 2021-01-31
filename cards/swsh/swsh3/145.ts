import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-145",

	localId: 145,

	name: {
		en: "Starly",
	},


	illustrator: "Naoyo Kimura",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 50,

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
			],

			name: {
				en: "Keen Eye",
			},

			text: {
				en: "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
			},


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