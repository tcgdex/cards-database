import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-94",

	localId: 94,

	name: {
		en: "Arceus LV. X",
		fr: "Arceus",
	},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Shizurow",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/94/low",
				fr: "https://assets.tcgdex.net/fr/pl/pl4/94/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/94/high",
				fr: "https://assets.tcgdex.net/fr/pl/pl4/94/high",
			},

	},


	// Card Pokémon Informations

	dexId: 493,



	type: [
		Type.COLORLESS,
	],

	abilities: [
		{
	type: AbilityType.POKEBODY, 

	name: {
		en: "Multitype",
		fr: "Multi-Type",
	},

	text: {
		en: "Arceus LV.X's type is the same type as its previous Level.",
		fr: "Le type d'Arceus NIV.X est le même qu'au tour précédent.",
	},

}
,
	],




	retreat: 1,


	// Card Trainer/Energy informations

}

export default card