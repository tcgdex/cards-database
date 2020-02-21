import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-58",
	localId: 58,

	// Card informations
	name: {
		en: "Floatzel",
		fr: "Mustéflott",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 419,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/58/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/58/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/58/high",
		},
	},

	evolveFrom: {
		en: "Buizel",
		fr: "Mustébouée",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Razor Fin",
			fr: "Aileron-rasoir",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Jet Screw",
			fr: "Vis express",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
