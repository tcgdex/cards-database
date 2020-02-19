import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-68",
	localId: 68,

	// Card informations
	name: {
		en: "Vulpix",
		fr: "Goupix",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 37,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/68/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/68/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/68/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/68/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Fireworks",
			fr: "Feux d'artifice",
		},
		text: {
			en: "Flip a coin. If tails, discard a Fire Energy attached to Vulpix.",
			fr: "Lancez une pièce. Si c'est pile, défaussez une carte Énergie Fire attachée à Goupix.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card

