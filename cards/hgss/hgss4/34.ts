import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-34",
	localId: 34,

	// Card informations
	name: {
		en: "Electrode",
		fr: "Electrode",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 101,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/34/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/34/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/34/high",
		},
	},

	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Rollout",
			fr: "Roulade",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Lightning Strike",
			fr: "Frap'éclair",
		},
		text: {
			en: "You may do 40 damage plus 60 more damage. If you do, discard all Lightning Energy attached to Electrode.",
			fr: "Vous pouvez infliger 40 dégâts plus 60 dégâts supplémentaires. Dans ce cas, défaussez toutes les cartes Énergie Lightning attachées à Electrode.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
