import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-94",
	localId: 94,

	// Card informations
	name: {
		en: "Metang",
		fr: "Métang",
	},

	hp: 90,

	type: [
		Type.METAL,
	],

	dexId: 375,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/94/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/94/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/94/high",
		},
	},

	evolveFrom: {
		en: "Beldum",
		fr: "Terhal",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "SATOSHI NAKAI",



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Bullet Punch",
			fr: "Pisto-Poing",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
