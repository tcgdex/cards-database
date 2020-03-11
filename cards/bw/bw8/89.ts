import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-89",
	localId: 89,

	// Card informations
	name: {
		en: "Klang",
		fr: "Clic",
	},

	hp: 80,

	type: [
		Type.METAL,
	],

	dexId: 600,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/89/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/89/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/89/high",
		},
	},

	evolveFrom: {
		en: "Klink",
		fr: "Tic",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Vice Grip",
			fr: "Force Poigne",
		},
		damage: 20
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gear Smash",
			fr: "Méca-Fracas",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 30
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

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
