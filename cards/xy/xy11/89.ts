import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-89",
	localId: 89,

	// Card informations
	name: {
		en: "Persian",
		fr: "Persian",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 53,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/89/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/89/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/89/high",
		},
	},

	evolveFrom: {
		en: "Meowth",
		fr: "Miaouss",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 50,
		name: "Anesaki Dynamic"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Raid",
			fr: "Razzia Obscure",
		},
		text: {
			en: "If this Pokémon evolved from Meowth during this turn, this attack does 30 more damage.",
			fr: "Si ce Pokémon a évolué de Miaouss pendant ce tour, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fury Swipes",
			fr: "Combo-Griffe",
		},
		text: {
			en: "Flip 3 coins. This attack does 30 damage times the number of heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
