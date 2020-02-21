import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-89",
	localId: 89,

	// Card informations
	name: {
		en: "Steelix",
		fr: "Steelix",
	},

	hp: 190,

	type: [
		Type.METAL,
	],

	dexId: 208,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/89/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/89/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/89/high",
		},
	},

	evolveFrom: {
		en: "Onix",
		fr: "Onix",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 30
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tail Crush",
			fr: "Écras’Queue",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 40 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
