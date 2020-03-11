import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-81",
	localId: 81,

	// Card informations
	name: {
		en: "Blissey",
		fr: "Leuphorie",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 242,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/81/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/81/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/81/high",
		},
	},

	evolveFrom: {
		en: "Chansey",
		fr: "Leveinard",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "kirisAki",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tender Vengeance",
			fr: "Douce Vengeance",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage times the number of damage counters on each of your Benched Pokémon.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts placés sur chacun de vos Pokémon de Banc.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Charge Dash",
			fr: "Attaque Précipitée",
		},
		text: {
			en: "You may do 20 more damage. If you do, this Pokémon does 20 damage to itself.",
			fr: "Vous pouvez infliger 20 dégâts supplémentaires. Dans ce cas, ce Pokémon s'inflige 20 dégâts.",
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
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
