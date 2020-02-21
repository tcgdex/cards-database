import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-46",
	localId: 46,

	// Card informations
	name: {
		en: "Scyther",
		fr: "Insécateur",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 123,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/46/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/46/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/46/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Slash",
			fr: "Tranche",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Fury Cutter",
			fr: "Taillade",
		},
		text: {
			en: "Flip 3 coins. If 1 of them is heads, this attack does 10 damage plus 10 more damage. If 2 of them are heads, this attack does 10 damage plus 20 more damage. If all of them are heads, this attack does 10 damage plus 40 more damage.",
			fr: "Lancez 3 pièces. Si l'une est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires. Si deux sont faces, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires. Si ce ne sont que des faces, cette attaque inflige 10 dégâts plus 40 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
