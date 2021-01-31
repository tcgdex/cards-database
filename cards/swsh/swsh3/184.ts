import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-184",

	localId: 184,

	name: {
		en: "Galarian Stunfisk V",
	},


	illustrator: "PLANETA Tsuji",

	rarity: Rarity.ULTRARARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 200,

	type: [
		Type.METAL,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Metal Skin",
	},

	text: {
		en: "This Pokémon gets +20 HP for each Metal Energy attached to it.",
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
				en: "Trapping Bite",
			},

			text: {
				en: "During your opponent’s next turn, if this Pokémon is damaged by an attack (even if it is Knocked Out), put 12 damage counters on the Attacking Pokémon.",
			},

			damage: 60,

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

	retreat: 4,


	// Card Trainer/Energy informations

}

export default card