import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dv1-14",
	localId: 14,

	// Card informations
	name: {
		en: "Fraxure",
		fr: "Incisache",
	},

	hp: 70,

	type: [
		Type.DRAGON,
	],

	dexId: 611,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/dv1/14/low",
			fr: "https://assets.tcgdex.net/fr/bw/dv1/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/dv1/14/high",
			fr: "https://assets.tcgdex.net/fr/bw/dv1/14/high",
		},
	},

	evolveFrom: {
		en: "Axew",
		fr: "Coupenotte",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shin Nagasawa",

	abilities: [{
		id: 878,
		type: AbilityType.TALENT,
		name: {
			en: "Grit",
			fr: "Vaillance",
		},
		text: {
			en: "If this Pokémon is affected by a Special Condition, each of its attacks does 40 more damage (before applying Weakness and Resistance).",
			fr: "Si ce Pokémon est affecté par un État Spécial, chacune de ses attaques inflige 40 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Claw",
			fr: "Dracogriffe",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Dragon Vault",
		code: "dv1"
	}
}

export default card
