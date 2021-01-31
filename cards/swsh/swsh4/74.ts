import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh4'


const card: Card = {
	// Card Global Informations
	id: "swsh4-74",

	localId: 74,

	name: {
		en: "Swoobat",
	},

	tags: [
	],

	illustrator: "Kagemaru Himeno",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Woobat",
	},



	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Unaware",
	},

	text: {
		en: "Prevent all effects of attacks from your opponent’s Pokémon done to this Pokémon. (Damage is not an effect.)",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.PSYCHIC,
				Type.COLORLESS,
			],

			name: {
				en: "Heart Stamp",
			},


			damage: 70,

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