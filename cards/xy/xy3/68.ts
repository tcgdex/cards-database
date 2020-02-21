import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-68",
	localId: 68,

	// Card informations
	name: {
		en: "Pangoro",
		fr: "Pandarbare",
	},

	hp: 120,

	type: [
		Type.DARKNESS,
	],

	dexId: 675,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/68/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/68/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/68/high",
		},
	},

	evolveFrom: {
		en: "Pancham",
		fr: "Pandespiègle",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Clobber",
			fr: "Tabassage",
		},
		text: {
			en: "You may discard an Item card from your hand. If you do, this attack does 40 more damage.",
			fr: "Vous pouvez défausser une carte Objet de votre main. Dans ce cas, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 30
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
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
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
