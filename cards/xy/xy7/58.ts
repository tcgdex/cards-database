import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-58",
	localId: 58,

	// Card informations
	name: {
		en: "Goomy",
		fr: "Mucuscule",
	},

	hp: 40,

	type: [
		Type.DRAGON,
	],

	dexId: 704,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/58/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/58/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/58/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 24,
		name: "sui"
	},

	abilities: [{
		id: 1288,
		type: AbilityType.TALENT,
		name: {
			en: "Water Down",
			fr: "Dilution",
		},
		text: {
			en: "Whenever you attach a Water Energy card from your hand to this Pokémon, you may search your deck for Goomy and put it onto your Bench. Shuffle your deck afterward.",
			fr: "Chaque fois que vous attachez une carte Énergie Water de votre main à ce Pokémon, vous pouvez chercher Mucuscule dans votre deck et le placer sur votre Banc. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Stampede",
			fr: "Ruée",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
