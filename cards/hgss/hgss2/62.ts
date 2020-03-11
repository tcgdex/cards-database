import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/hgss/hgss2/62/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/62/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/62/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



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
