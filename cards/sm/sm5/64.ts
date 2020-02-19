import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-64",
	localId: 64,

	// Card informations
	name: {
		en: "Cranidos",
		fr: "Kranidos",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 408,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/64/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/64/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/64/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/64/high.png",
		},
	},

	evolveFrom: {
		en: "Unidentified Fossil",
		fr: "Fossile Inconnu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Headstrike",
			fr: "Coup de Tête",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card

