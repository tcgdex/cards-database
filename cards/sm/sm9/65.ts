import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm9/65/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/65/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/65/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/65/high.png",
		},
	},

	evolveFrom: {
		en: "Staryu",
		fr: "Stari",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 3,
		name: "Mizue"
	},



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

