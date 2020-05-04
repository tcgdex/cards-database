import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-56",
	localId: 56,

	// Card informations
	name: {
		en: "Duosion",
		fr: "Méios",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 578,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/56/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/56/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/56/high",
		},
	},

	evolveFrom: {
		en: "Solosis",
		fr: "Nucléos",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Recover",
			fr: "Soin",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon and heal all damage from this Pokémon.",
			fr: "Défaussez une Énergie attachée à ce Pokémon et soignez tous les dégâts de ce Pokémon.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Rollout",
			fr: "Roulade",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
