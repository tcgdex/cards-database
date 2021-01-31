import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-117",

	localId: 117,

	name: {
		en: "Eternatus VMAX",
	},


	illustrator: "5ban Graphics",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Eternatus V",
	},



	hp: 340,

	type: [
		Type.DARKNESS,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Eternal Zone",
	},

	text: {
		en: "If all of your Pokémon in play are Darkness type, you can have up to 8 Pokémon on your Bench, and you can’t put non-Darkness Pokémon into play. (If this Ability stops working, discard Pokémon from your Bench until you have 5.)",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.DARKNESS,
				Type.COLORLESS,
			],

			name: {
				en: "Dread End",
			},

			text: {
				en: "This attack does 30 damage for each of your Darkness Pokémon in play.",
			},

			damage: "30×",

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