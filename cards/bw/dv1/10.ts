import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dv1-10",
	localId: 10,

	// Card informations
	name: {
		en: "Latios",
		fr: "Latios",
	},

	hp: 100,

	type: [
		Type.DRAGON,
	],

	dexId: 381,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/dv1/10/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/dv1/10/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/dv1/10/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/dv1/10/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Sky Blade",
			fr: "Lame Céleste",
		},
		text: {
			en: "If Latias is on your Bench, this attack does 20 more damage.",
			fr: "Si Latias est sur votre Banc, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Speed Wing",
			fr: "Ailes Vives",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragon Vault",
		code: "dv1"
	}
}

export default card

