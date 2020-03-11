import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-105",
	localId: 105,

	// Card informations
	name: {
		en: "Shelgon",
		fr: "Drackhaus",
	},

	hp: 90,

	type: [
		Type.DRAGON,
	],

	dexId: 372,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/105/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/105/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/105/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/105/high",
		},
	},

	evolveFrom: {
		en: "Bagon",
		fr: "Draby",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Asako Ito",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.WATER
		],
		name: {
			en: "Raging Blade",
			fr: "Lame en Furie",
		},
		text: {
			en: "If this Pokémon has any damage counters on it, this attack does 50 more damage.",
			fr: "Si des marqueurs de dégâts sont placés sur ce Pokémon, cette attaque inflige 50 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
