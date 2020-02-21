import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-81",
	localId: 81,

	// Card informations
	name: {
		en: "Loudred",
		fr: "Ramboum",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 294,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/81/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/81/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/81/high",
		},
	},

	evolveFrom: {
		en: "Whismur",
		fr: "Chuchmur",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Smash Kick",
			fr: "Coud'Pattes",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Stomp",
			fr: "Écrasement",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 40 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
