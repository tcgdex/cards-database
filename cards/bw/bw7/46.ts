import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-46",
	localId: 46,

	// Card informations
	name: {
		en: "Cryogonal",
		fr: "Hexagel",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 615,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/46/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/46/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/46/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Ice Edge",
			fr: "Lame de Givre",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
