import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-3",
	localId: 3,

	// Card informations
	name: {
		en: "Wormadam",
		fr: "Cheniselle",
	},

	hp: 120,

	type: [
		Type.GRASS,
	],

	dexId: 413,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/3/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/3/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/3/high",
		},
	},

	evolveFrom: {
		en: "Burmy",
		fr: "Cheniti",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "kawayoo",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Solar Ray",
			fr: "Rayonnement Solaire",
		},
		text: {
			en: "Heal 20 damage from each of your Pokémon.",
			fr: "Soignez 20 dégâts à chacun de vos Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Leaf Cutter",
			fr: "Coupe Feuille",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
