import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



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

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
