import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh35'


const card: Card = {
	// Card Global Informations
	id: "swsh35-71",

	localId: 71,

	name: {
		en: "Galarian Cursola V",
	},

	tags: [
	],

	illustrator: "5ban Graphics",

	rarity: Rarity.ULTRARARE, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/swsh/swsh35/71/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/swsh/swsh35/71/high",
			},

	},


	// Card Pokémon Informations



	hp: 190,

	type: [
		Type.PSYCHIC,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Gnawing Aura",
	},

	text: {
		en: "As long as this Pokémon is in the Active Spot, whenever your opponent attaches an Energy card from their hand to 1 of their Pokémon, put 3 damage counters on that Pokémon.",
	},

}
,
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

	retreat: 2,


	// Card Trainer/Energy informations
	effect: {
		en: "When your Pokémon V is Knocked Out, your opponent takes 2 Prize cards.",
	},

}

export default card