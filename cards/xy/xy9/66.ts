import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-66",
	localId: 66,

	// Card informations
	name: {
		en: "Trevenant BREAK",
		fr: "Desséliande TURBO",
	},

	hp: 160,

	type: [
		Type.PSYCHIC,
	],

	dexId: 709,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/66/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/66/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/66/high",
		},
	},

	evolveFrom: {
		en: "Trevenant",
		fr: "Desséliande",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Silent Fear",
			fr: "Règle des Évolutions TURBO",
		},
		text: {
			en: "Put 3 damage counters on each of your opponent's Pokémon.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			fr: "Peur Silencieuse",
		},
		text: {
			fr: "Placez 3 marqueurs de dégâts sur chacun des Pokémon de votre adversaire.",
		},
	}],







	rarity: Rarity.RareBREAK,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
