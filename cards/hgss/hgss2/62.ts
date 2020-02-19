import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-62",
	localId: 62,

	// Card informations
	name: {
		en: "Spearow",
		fr: "Piafabec",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 21,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/62/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/62/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/62/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/62/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Roost",
			fr: "Atterrissage",
		},
		text: {
			en: "Remove 4 damage counters from Spearow. Spearow can't retreat during your next turn.",
			fr: "Retirez 4 marqueurs de dégât à Piafabec. Piafabec ne peut pas battre en retraite pendant votre prochain tour.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Flap",
			fr: "Battement",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
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

