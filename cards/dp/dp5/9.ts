import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-9",
	localId: 9,

	// Card informations
	name: {
		en: "Mewtwo",
		fr: "Mewtwo",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 150,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/9/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/9/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/9/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kent Kanetsuna",



	attacks: [{
		name: {
			en: "Energy Absorption",
			fr: "Absorption d'énergie",
		},
		text: {
			en: "Search your discard pile for up to 2 Energy cards and attach them to Mewtwo.",
			fr: "Choisissez dans votre pile de défausse jusqu'à 2 cartes Énergie et attachez-les à Mewtwo.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Recover",
			fr: "Soin",
		},
		text: {
			en: "Discard a Psychic Energy attached to Mewtwo and remove 6 damage counters from Mewtwo.",
			fr: "Défaussez une Énergie Psychic attachée à Mewtwo et retirez-lui 6 marqueurs de dégât.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psyburn",
			fr: "Brûlure psy",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
