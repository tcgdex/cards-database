import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-32",

	localId: 32,

	name: {
		en: "Talonflame",
	},


	illustrator: "kawayoo",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Fletchinder",
	},



	hp: 140,

	type: [
		Type.FIRE,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Scorching Feathers",
	},

	text: {
		en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent’s Pokémon (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Burned.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.FIRE,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Mach Flight",
			},

			text: {
				en: "During your opponent’s next turn, the Defending Pokémon can’t retreat.",
			},

			damage: 120,

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