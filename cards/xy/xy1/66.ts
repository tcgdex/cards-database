import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-66",
	localId: 66,

	// Card informations
	name: {
		en: "Gurdurr",
		fr: "Ouvrifier",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 533,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/66/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/66/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/66/high",
		},
	},

	evolveFrom: {
		en: "Timburr",
		fr: "Charpenti",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Pummel",
			fr: "Martelage",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Hammer Arm",
			fr: "Marto-Poing",
		},
		text: {
			en: "Discard the top card of your opponent's deck.",
			fr: "Défaussez la carte du dessus du deck de votre adversaire.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
