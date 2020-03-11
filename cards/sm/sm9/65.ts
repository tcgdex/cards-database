import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-65",
	localId: 65,

	// Card informations
	name: {
		en: "Starmie",
		fr: "Staross",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 121,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/65/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/65/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/65/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/65/high",
		},
	},

	evolveFrom: {
		en: "Staryu",
		fr: "Stari",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mizue",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Strange Wave",
			fr: "Vague Insolite",
		},
		text: {
			en: "Search your deck for up to 3 in any combination of Water and Psychic Energy cards and attach them to 1 of your Benched Pokémon. Then, shuffle your deck.",
			fr: "Cherchez une combinaison d’un maximum de 3 cartes Énergie Water et Psychic dans votre deck et attachez-les à l’un de vos Pokémon de Banc. Mélangez ensuite votre deck.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
