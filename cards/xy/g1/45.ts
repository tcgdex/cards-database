import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "g1-45",
	localId: 45,

	// Card informations
	name: {
		en: "Golem",
		fr: "Grolem",
	},

	hp: 150,

	type: [
		Type.FIGHTING,
	],

	dexId: 76,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/45/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/45/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/45/high",
		},
	},

	evolveFrom: {
		en: "Graveler",
		fr: "Gravalanch",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Hasuno",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Stone Edge",
			fr: "Lame de Roc",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 60
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Explosion",
			fr: "Explosion",
		},
		text: {
			en: "This Pokémon does 100 damage to itself.",
			fr: "Ce Pokémon s'inflige 100 dégâts.",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
