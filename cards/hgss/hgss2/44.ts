import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-44",
	localId: 44,

	// Card informations
	name: {
		en: "Beldum",
		fr: "Terhal",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 374,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/44/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/44/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/44/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 41,
		name: "Wataru Kawahara"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Reaction",
			fr: "Réagir",
		},
		text: {
			en: "You may switch Beldum with 1 of your Benched Pokémon.",
			fr: "Vous pouvez échanger Terhal avec un Pokémon de votre Banc.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
