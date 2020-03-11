import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-126",
	localId: 126,

	// Card informations
	name: {
		en: "Lucario",
		fr: "Lucario",
	},

	hp: 130,

	type: [
		Type.METAL,
	],

	dexId: 448,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/126/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/126/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/126/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/126/high",
		},
	},

	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Low Sweep",
			fr: "Balayette",
		},
		damage: 40
	},{
		cost: [
			Type.METAL,
			Type.METAL
		],
		name: {
			en: "Rush Up",
			fr: "En Toute Hâte",
		},
		text: {
			en: "If you attached a Pokémon Tool card from your hand to this Pokémon during this turn, this attack does 70 more damage.",
			fr: "Si vous avez attaché une carte Outil Pokémon de votre main à ce Pokémon pendant ce tour, cette attaque inflige 70 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
