import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-160",
	localId: 160,

	// Card informations
	name: {
		en: "Jangmo-o",
		fr: "Bébécaille",
	},

	hp: 60,

	type: [
		Type.DRAGON,
	],

	dexId: 782,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/160/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/160/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/160/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/160/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "AKIRA EGAWA",



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.FIGHTING
		],
		name: {
			en: "Raging Claws",
			fr: "Griffes Enragées",
		},
		text: {
			en: "This attack does 10 more damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
