import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-47",
	localId: 47,

	// Card informations
	name: {
		en: "Camerupt",
		fr: "Camerupt",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 323,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/47/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/47/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/47/high",
		},
	},

	evolveFrom: {
		en: "Numel",
		fr: "Camaub",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Eruption",
			fr: "Éruption",
		},
		text: {
			en: "Each player discards the top card of his or her deck. This attack does 30 damage plus 30 more damage for each Energy card discarded in this way.",
			fr: "Chaque joueur défausse la carte du dessus de son deck. Cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires pour chaque carte Énergie défaussée de cette façon.",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Take Down",
			fr: "Bélier",
		},
		text: {
			en: "Camerupt does 20 damage to itself.",
			fr: "Camerupt s'inflige 20 dégâts.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],



	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
