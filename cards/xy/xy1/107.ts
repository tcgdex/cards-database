import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-107",
	localId: 107,

	// Card informations
	name: {
		en: "Bibarel",
		fr: "Castorno",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 400,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/107/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/107/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/107/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/107/high",
		},
	},

	evolveFrom: {
		en: "Bidoof",
		fr: "Keunotor",
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
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Headbutt",
			fr: "Double Coup d'Boule",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hypno Headbutt",
			fr: "Hypno Coup d'Boule",
		},
		text: {
			en: "You may do 30 more damage. If you do, this Pokémon is now Asleep.",
			fr: "Vous pouvez infliger 30 dégâts supplémentaires. Dans ce cas, ce Pokémon est maintenant Endormi.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
