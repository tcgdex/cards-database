import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh4'


const card: Card = {
	// Card Global Informations
	id: "swsh4-118",

	localId: 118,

	name: {
		en: "Metagross",
	},

	tags: [
	],

	illustrator: "kawayoo",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Metang",
	},



	hp: 170,

	type: [
		Type.METAL,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Levitation Field",
	},

	text: {
		en: "Your Pokémon in play have no Retreat Cost.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.METAL,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Leg Quake",
			},

			text: {
				en: "If the Defending Pokémon is an Evolution Pokémon, it can’t attack during your opponent’s next turn.",
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: Type.FIRE, 

			value: "×2",

		},
	],

	resistances: [
		{
			type: Type.GRASS, 

			value: "-30",

		},
	],

	retreat: 3,


	// Card Trainer/Energy informations

}

export default card