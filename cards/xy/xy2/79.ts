import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-79",
	localId: 79,

	// Card informations
	name: {
		en: "M Kangaskhan-EX",
		fr: "M Kangourex-EX",
	},

	hp: 230,

	type: [
		Type.COLORLESS,
	],

	dexId: 115,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/79/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/79/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/79/high",
		},
	},

	evolveFrom: {
		en: "Kangaskhan-EX",
		fr: "Kangourex-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wham Bam Punch",
			fr: "Règle des Méga-Évolutions",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
		},
		damage: 100
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Poing Boum",
		},
		text: {
			fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
		},
		damage: "100+"
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
