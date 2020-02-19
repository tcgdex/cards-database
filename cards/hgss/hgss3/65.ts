import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-65",
	localId: 65,

	// Card informations
	name: {
		en: "Scyther",
		fr: "Insecateur",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 123,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/65/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/65/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/65/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/65/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cut",
			fr: "Coupe",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slashing Strike",
			fr: "Coup déchirant",
		},
		text: {
			en: "During your next turn, Scyther can't use Slashing Strike.",
			fr: "Insécateur ne peut pas utiliser son Coup déchirant pendant votre prochain tour.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card

