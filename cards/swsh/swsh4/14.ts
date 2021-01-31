import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh4'


const card: Card = {
	// Card Global Informations
	id: "swsh4-14",

	localId: 14,

	name: {
		en: "Ninjask",
	},

	tags: [
	],

	illustrator: "Tomokazu Komiya",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Nincada",
	},



	hp: 60,

	type: [
		Type.GRASS,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Cast-Off Shell",
	},

	text: {
		en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may search your deck for a Shedinja and put it onto your Bench. Then, shuffle your deck.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.GRASS,
			],

			name: {
				en: "Absorb",
			},

			text: {
				en: "Heal 30 damage from this Pokémon.",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: Type.FIRE, 

			value: "×2",

		},
	],




	// Card Trainer/Energy informations

}

export default card