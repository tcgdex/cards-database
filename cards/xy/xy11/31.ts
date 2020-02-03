import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-31",
	localId: 31,

	// Card informations
	name: {
		en: "Dewott",
		fr: "Mateloutre",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 502,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/31/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/31/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/31/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/31/high.png",
		},
	},

	evolveFrom: {
		en: "Oshawott",
		fr: "Moustillon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Razor Shell",
			fr: "Coquilame",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card

