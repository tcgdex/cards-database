import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-88",
	localId: 88,

	// Card informations
	name: {
		en: "Graveler",
		fr: "Gravalanch",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 75,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/88/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/88/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/88/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/88/high",
		},
	},

	evolveFrom: {
		en: "Geodude",
		fr: "Racaillou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ayaka Yoshida",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rolling Rocks",
			fr: "Rochers Roulants",
		},
		damage: 50
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double-Edge",
			fr: "Damoclès",
		},
		text: {
			en: "This Pokémon does 30 damage to itself.",
			fr: "Ce Pokémon s’inflige 30 dégâts.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
