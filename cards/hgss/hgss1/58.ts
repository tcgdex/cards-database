import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-58",
	localId: 58,

	// Card informations
	name: {
		en: "Chansey",
		fr: "Leveinard",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 113,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/58/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/58/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/58/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/58/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pound",
			fr: "Écras’face",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Happy Punch",
			fr: "Coup d’joie",
		},
		text: {
			en: "Flip a coin. If heads, remove 3 damage counters from Chansey.",
			fr: "Lancez une pièce. Si c’est face, retirez 3 marqueurs de dégâts de Leveinard.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card

