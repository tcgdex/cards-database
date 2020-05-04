import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "base2-30",
	localId: 30,

	// Card informations
	name: {
		en: "Victreebel",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 71,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base2/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base2/30/high",
		},
	},

	evolveFrom: {
		en: "Weepinbell",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Lure",
		},
		text: {
			en: "If your opponent has any Benched Pokémon, choose 1 of them and switch it with his or her Active Pokémon.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Acid",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon can't retreat during your opponent's next turn.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Jungle",
		code: "base2"
	}
}

export default card
