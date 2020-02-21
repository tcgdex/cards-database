import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-54",
	localId: 54,

	// Card informations
	name: {
		en: "Golbat",
		fr: "Nosferalto",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 42,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/54/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/54/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/54/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/54/high",
		},
	},

	evolveFrom: {
		en: "Zubat",
		fr: "Nosferapti",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Spiral Drain",
			fr: "Spirale Épuisante",
		},
		text: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts à ce Pokémon.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
