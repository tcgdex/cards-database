import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-51",
	localId: 51,

	// Card informations
	name: {
		en: "Bibarel",
		fr: "Castorno",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 400,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/51/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/51/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/51/high",
		},
	},

	evolveFrom: {
		en: "Bidoof",
		fr: "Keunotor",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rolling Tackle",
			fr: "Roulé-boulé",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tail Rap",
			fr: "Frap' keu",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],



	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
