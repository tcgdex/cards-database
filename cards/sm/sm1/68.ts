import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-68",
	localId: 68,

	// Card informations
	name: {
		en: "Hariyama",
		fr: "Hariyama",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 297,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/68/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/68/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/68/high",
		},
	},

	evolveFrom: {
		en: "Makuhita",
		fr: "Makuhita",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 37,
		name: "Miki Tanaka"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Push Out",
			fr: "Expulsion",
		},
		text: {
			en: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
			fr: "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
		},
		damage: 60
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Megaton Slap Push",
			fr: "Grande Claque Titanesque",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
