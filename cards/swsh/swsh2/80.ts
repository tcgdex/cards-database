import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-80",

	localId: 80,

	name: {
		en: "Sigilyph",
	},

	tags: [
	],

	illustrator: "Naoyo Kimura",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations





	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Counterattack",
	},

	text: {
		en: "If this Pokémon is in the Active Spot and is damaged by an opponent’s attack (even if it is Knocked Out), put 3 damage counters on the Attacking Pokémon.",
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
				en: "Psychic Assault",
			},

			text: {
				en: "This attack does 10 more damage for each damage counter on your opponent’s Active Pokémon.",
			},

			damage: "30+",

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