import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-22",
	localId: 22,

	// Card informations
	name: {
		en: "Golduck",
		fr: "Akwakwak",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 55,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/22/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/22/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/22/high",
		},
	},

	evolveFrom: {
		en: "Psyduck",
		fr: "Psykokwak",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},

	abilities: [{
		id: 229,
		type: AbilityType.POKEBODY,
		name: {
			en: "Natural Remedy",
			fr: "Remède naturel",
		},
		text: {
			en: "Whenever you attach a Water Energy card from your hand to Golduck, remove 2 damage counters from Golduck.",
			fr: "Lorsque vous attachez une carte Énergie Water de votre main à Akwakwak, retirez-lui 2 marqueurs de dégât.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Powerful Splash",
			fr: "Trempette puissante",
		},
		text: {
			en: "Does 30 damage plus 10 more damage for each Water Energy attached to all of your Pokémon.",
			fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie Water attachée à tous vos Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
