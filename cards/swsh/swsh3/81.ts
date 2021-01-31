import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-81",

	localId: 81,

	name: {
		en: "Mimikyu",
	},


	illustrator: "Ryota Murayama",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Heal Jamming",
	},

	text: {
		en: "Your opponent’s Benched Pokémon can’t be healed.",
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
				en: "Claw Slash",
			},


			damage: 30,

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

	retreat: 1,


	// Card Trainer/Energy informations

}

export default card