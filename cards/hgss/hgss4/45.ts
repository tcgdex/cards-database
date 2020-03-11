import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-45",
	localId: 45,

	// Card informations
	name: {
		en: "Nidorina",
		fr: "Nidorina",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 30,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/45/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/45/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/45/high",
		},
	},

	evolveFrom: {
		en: "Nidoran♀",
		fr: "Nidoran♀",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "sui",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Quick Blow",
			fr: "Coup d'poing éclair",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tail Slap",
			fr: "Coud'keu",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
