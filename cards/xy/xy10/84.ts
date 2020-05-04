import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-84",
	localId: 84,

	// Card informations
	name: {
		en: "Audino-EX",
		fr: "Nanméouïe-EXEX",
	},

	hp: 180,

	type: [
		Type.COLORLESS,
	],

	dexId: 531,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/84/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/84/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/84/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Ayaka Yoshida",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Drain Slap",
			fr: "Baffe Sangsue",
		},
		text: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts à ce Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Do the Wave",
			fr: "Faites la Vague",
		},
		text: {
			en: "This attack does 10 more damage for each of your Benched Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chacun de vos Pokémon de Banc.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
