import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-46",
	localId: 46,

	// Card informations
	name: {
		en: "Eelektrik",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 603,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/46/high",
		},
	},

	evolveFrom: {
		en: "Tynamo",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Headbutt",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Shock Bolt",
		},
		text: {
			en: "Discard all Lightning Energy attached to this Pokémon.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card
