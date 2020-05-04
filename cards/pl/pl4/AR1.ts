import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-AR1",

	localId: "AR1",

	name: {
		en: "Arceus",
		fr: "Arceus",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kawayoo",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/AR1/low",
				fr: "https://assets.tcgdex.net/fr/pl/pl4/AR1/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/AR1/high",
				fr: "https://assets.tcgdex.net/fr/pl/pl4/AR1/high",
			},

	},


	// Card Pokémon Informations

	dexId: 493,



	type: [
		Type.DARKNESS,
	],


	attacks: [
		{
			cost: [
				Type.DARKNESS,
				Type.COLORLESS,
			],

			name: {
				en: "Prize Count",
				fr: "Compteur de Récompense",
			},

			text: {
				en: "If you have more Prize cards left than your opponent, this attack does 20 damage plus 60 more damage.",
				fr: "S'il vous reste plus de cartes Récompense qu'à votre adversaire, cette attaque inflige 20 dégâts plus 60 dégâts supplémentaires.",
			},

			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: Type.FIGHTING, 

			value: "×2",

		},
	],

	resistances: [
		{
			type: Type.PSYCHIC, 

			value: "-20",

		},
	],

	retreat: 1,


	// Card Trainer/Energy informations

}

export default card