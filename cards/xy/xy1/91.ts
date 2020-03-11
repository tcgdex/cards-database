import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-91",
	localId: 91,

	// Card informations
	name: {
		en: "Mr. Mime",
		fr: "M. Mime",
	},

	hp: 80,

	type: [
		Type.FAIRY,
	],

	dexId: 122,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/91/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/91/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/91/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mizue",



	attacks: [{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Massage",
			fr: "Massage",
		},
		text: {
			en: "Heal 60 damage from 1 of your Benched Pokémon.",
			fr: "Soignez 60 dégâts à l'un de vos Pokémon de Banc.",
		},
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slap Down",
			fr: "Aplatissement",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
