import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-1",
	localId: 1,

	// Card informations
	name: {
		en: "Tangela",
		fr: "Saquedeneu",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 114,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/1/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/1/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/1/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 35,
		name: "OOYAMA"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Slam",
			fr: "Souplesse",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Mega Drain",
			fr: "Méga-Sangsue",
		},
		text: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts à ce Pokémon.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
