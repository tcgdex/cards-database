import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-149",
	localId: 149,

	// Card informations
	name: {
		en: "Moltres",
		fr: "Sulfura",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 146,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/149/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/149/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/149/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/149/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 73,
		name: "Toshinao Aoki"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Hyper Flame",
			fr: "Hyper-flamme",
		},
		text: {
			en: "Flip a coin. If heads, discard a Fire Energy attached to Moltres. If tails, discard all Energy attached to Moltres.",
			fr: "Lancez une pièce. Si c'est face, défaussez une carte Énergie Fire attachée à Sulfura. Si c'est pile, défaussez toutes les Énergies attachées à Sulfura.",
		},
		damage: 60
	}],



	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
